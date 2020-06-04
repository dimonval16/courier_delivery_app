export const SET_DELIVERY_CONTENT = 'SET_DELIVERY_CONTENT';
export const CLEAR_DELIVERY_INFO = 'CLEAR_DELIVERY_INFO';
export const START_NEW_ORDER = 'START_NEW_ORDER';
export const FINISH_ORDER = 'FINISH_ORDER';

export const finishOrderAC = (courierId, deliveryId) => {
    return {
        type: FINISH_ORDER,
        courierId,
        deliveryId
    }
}

export const startNewOrderAC = (courierId, deliveryId) => {
    return {
        type: START_NEW_ORDER,
        courierId,
        deliveryId
    }
}

export const clearDeliveryInfoAC = () => {
    return {
        type: CLEAR_DELIVERY_INFO
    }
}

export const setDeliveryContentAC = (del, use) => {
    return {
        type: SET_DELIVERY_CONTENT,
        PerformedByAPartner: del.PerformedByAPartner,
        DeliveredBy: del.DeliveredBy,
        payment: del.payment,
        cash: del.cash,
        paymentOnline: del.paymentOnline,
        deliveryId: del.deliveryId,
        responsibleCourier: del.responsibleCourier,
        userAddress: del.userAddress,
        userName: del.userName,
        userPhone: del.userPhone,
        userComment: del.userComment,
        price: del.price,
        orderData: del.orderData,
        deliveryTime: del.deliveryTime,
        deliveryData: del.deliveryData,
        partnerName: del.partnerName,
        partnerAddress: del.partnerAddress,
        orders: del.orders,
        use
    }
}