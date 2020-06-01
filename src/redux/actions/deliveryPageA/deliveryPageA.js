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
        PerformedByAPartner: data.PerformedByAPartner,
        DeliveredBy: data.DeliveredBy,
        payment: data.payment,
        deliveryId: data.deliveryId,
        userAddress: data.userAddress,
        userName: data.userName,
        userPhone: data.userPhone,
        userComment: data.userComment,
        price: data.price,
        orderData: data.orderData,
        deliveryTime: data.deliveryTime,
        deliveryData: data.deliveryData,
        partnerName: data.partnerName,
        partnerAddress: data.partnerAddress,
        orders: data.orders
    }
}