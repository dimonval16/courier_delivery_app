import courier from './courier_data/courier';

export const initialData = {
    authorization: {
        status: true,
    },
    sideDrawer: {
        items: [
            { title: 'Баланс', icon: 'account_balance_wallet' },
            { title: 'Контакты', icon: 'call' },
            { title: 'Архив', icon: 'archive' },
            { title: 'Выйти', icon: 'exit_to_app' }
        ]
    },
    user: courier,
    deliveryPage: {
        PerformedByAPartner: false,
        DeliveredBy: false,
        payment: false,
        cash: false,
        paymentOnline: false,
        deliveryId: '',
        responsibleCourier: '',
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
    },
    workPage: {
        tabStatus: 0
    },
    archivePage: {
        tabStatus: 0,
        archiveSession: {
            sessionId: 0,
            startOfSession: '',
            endOfSession: '',
            archiveDeliveries: []
        }
    }
}