import {
    SET_ORDERS_CONTENT,
    START_NEW_ORDER,
    UPDATE_ORDERS_CONTENT,
    FINISH_ORDER
} from '../../actions/mainA';

const reducer = (state = {}, action) => {
    switch (action.type) {
        case SET_ORDERS_CONTENT:
            return {
                ...state,
                deliveriesData: action.responseOrders
            }

        case START_NEW_ORDER:
            return {
                ...state,
                deliveriesData: state.deliveriesData.map(order => (
                    order.deliveryId === action.deliveryId ?
                        {...order, responsibleCourier: action.courierId}
                        :
                        order
                ))
            }

        case FINISH_ORDER:
            return {
                ...state,
                deliveriesData: state.deliveriesData.map(order => (
                    order.deliveryId === action.deliveryId ?
                        {
                            ...order,
                            PerformedByAPartner: true,
                            DeliveredBy: true,
                            payment: true,
                            responsibleCourier: action.courierId
                        }
                        :
                        order
                ))
            }

        case UPDATE_ORDERS_CONTENT:
            return {
                ...state,
                allDeliveries:
                    state.deliveriesData.filter(order => !order.responsibleCourier),
                activeDeliveries:
                    state.deliveriesData.filter(order => (
                        order.responsibleCourier === action.courierId
                        && !order.DeliveredBy
                    )),
                finishedDeliveries:
                    state.deliveriesData.filter(order => (
                        order.responsibleCourier === action.courierId
                        && order.PerformedByAPartner && order.DeliveredBy && order.payment
                    ))
            }

        default:
            return {...state}
    }
}

export default reducer;