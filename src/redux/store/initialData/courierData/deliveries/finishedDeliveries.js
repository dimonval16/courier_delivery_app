const finishedDeliveries = [
    {
        deliveryId: 1,
        PerformedByAPartner: true,
        DeliveredBy: true,
        payment: true,
        cash: true,
        paymentOnline: false,
        userName: 'Володя',
        userAddress: 'вул. Правди 25',
        userPhone: '0963528223',
        userComment: 'Нужно 500 салфеток очень срочно кабзда вообще хана чо делать',
        userId: '5472',
        deliveryTime: '2020-05-25T16:03', // время когда заказ выполнен
        deliveryData: '2020-05-25T15:00', //время когда заказ поступил
        responsiblePartner: 'id партнера',
        partnerName: 'Mac Donalds',
        partnerAddress: 'вул. Вокзальна 3',
        responsibleCourier: 'id driver',
        city: 'Шепетівка',
        orders: [
            {
                id: 3,
                productName: 'Цезар',
                productWeight: '275 г',
                ingredients: 'Куряче філе на грилі, бекон, яйце, томати, салат ромен, пармезан, часникові крутони, соус Caesar',
                price: 130,
                productImageUrl: 'https://mafia.ua/storage/editor/fotos/450x450/cezar_1562848584478.jpeg',
                keywords: ['салати'],
                weight: 275,
                stopList: false,
            },
            {
                id: 4,
                productName: 'Картошка-фри',
                productWeight: '241 г',
                ingredients: 'Куряче філе на грилі, бекон, яйце, томати, салат ромен, пармезан, часникові крутони, соус Caesar',
                price: 25,
                productImageUrl: 'https://mafia.ua/storage/editor/fotos/450x450/cezar_1562848584478.jpeg',
                keywords: ['салати'],
                weight: 241,
                stopList: false,
            },
            {
                id: 5,
                productName: 'Бургер Український',
                productWeight: '300 г',
                ingredients: 'Куряче філе на грилі, бекон, яйце, томати, салат ромен, пармезан, часникові крутони, соус Caesar',
                price: 85,
                productImageUrl: 'https://mafia.ua/storage/editor/fotos/450x450/cezar_1562848584478.jpeg',
                keywords: ['салати'],
                weight: 300,
                stopList: false,
            }
        ],
        price: 240,
        orderData: '2020-05-25T15:00'
    }
];

export default finishedDeliveries;