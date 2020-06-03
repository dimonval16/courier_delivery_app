const allDeliveries = [
    {
        deliveryId: 1,
        PerformedByAPartner: false,
        DeliveredBy: false,
        payment: false,
        cash: true,
        paymentOnline: false,
        userName: 'Василь Андрійович',
        userAddress: 'вул. Олени Тулузи 5А',
        userPhone: '0963528223',
        userComment: 'Ой хлопці давайте швидше',
        userId: '5473',
        deliveryTime: '2020-05-25T17:20',
        deliveryData: '2020-05-25T16:05',
        responsiblePartner: 'id партнера',
        partnerName: 'KFC',
        partnerAddress: 'вул. Урлівська 12',
        responsibleCourier: '',
        city: 'Шепетівка',
        orders: [
            {
                id: 1,
                productName: 'Царский Бутер',
                productWeight: '500 г',
                ingredients: 'Куряче філе на грилі, бекон, яйце, томати, салат ромен, пармезан, часникові крутони, соус Caesar',
                price: 88,
                productImageUrl: 'https://mafia.ua/storage/editor/fotos/450x450/cezar_1562848584478.jpeg',
                keywords: ['бургери'],
                weight: 500,
                stopList: false,
            }],
        price: 88,
        orderData: '2020-05-25T16:23'
    }
];

export default allDeliveries;