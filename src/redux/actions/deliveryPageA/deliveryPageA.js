export const SET_DELIVERY_CONTENT = 'SET_DELIVERY_CONTENT';
export const CLEAR_DELIVERY_INFO = 'CLEAR_DELIVERY_INFO';

export const clearDeliveryInfoAC = () => {
    return {
        type: CLEAR_DELIVERY_INFO
    }
}

export const setDeliveryContentAC = data => {
    return {
        type: SET_DELIVERY_CONTENT,
        deliveryId: data.deliveryId,
        userAddress: data.userAddress,
        userName: data.userName
    }
}