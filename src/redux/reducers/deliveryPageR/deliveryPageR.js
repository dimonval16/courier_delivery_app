import {SET_DELIVERY_CONTENT, CLEAR_DELIVERY_INFO} from '../../actions/mainA';

const reducer = (state = {}, action) => {
    switch (action.type) {
        case SET_DELIVERY_CONTENT:
            return {
                ...state,
                PerformedByAPartner: action.PerformedByAPartner,
                DeliveredBy: action.DeliveredBy,
                payment: action.payment,
                cash: action.cash,
                paymentOnline: action.paymentOnline,
                deliveryId: action.deliveryId,
                userAddress: action.userAddress,
                userName: action.userName,
                userPhone: action.userPhone,
                userComment: action.userComment,
                price: action.price,
                orderData: action.orderData,
                deliveryTime: action.deliveryTime,
                deliveryData: action.deliveryData,
                partnerName: action.partnerName,
                partnerAddress: action.partnerAddress,
                orders: action.orders,
                use: action.use
            }

        case CLEAR_DELIVERY_INFO:
            return {
                ...state,
                PerformedByAPartner: false,
                DeliveredBy: false,
                payment: false,
                cash: false,
                paymentOnline: false,
                deliveryId: '',
                userAddress: '',
                userName: '',
                userPhone: '',
                userComment: '',
                price: '',
                orderData: '',
                deliveryTime: '',
                deliveryData: '',
                partnerName: '',
                partnerAddress: '',
                orders: [],
                use: ''
            }

        default:
            return {...state}
    }
}

export default reducer;