import responseOrders from '../../requests_response_data/responseOrders';

export const SET_TAB_STATUS = 'SET_TAB_STATUS';
export const SET_ORDERS_CONTENT = 'SET_ORDERS_CONTENT';
export const UPDATE_ORDERS_CONTENT = 'UPDATE_ORDERS_CONTENT';

export const updateOrdersContentAC = courierId => {
    return {
        type: UPDATE_ORDERS_CONTENT,
        courierId
    }
}


export const setOrdersContentAC = (courierId, startData) => {
    return {
        type: SET_ORDERS_CONTENT,
        responseOrders,
        courierId,
        startData
    }
}

export const setTabStatusAC = newValue => {
    return {
        type: SET_TAB_STATUS,
        newValue
    }
}