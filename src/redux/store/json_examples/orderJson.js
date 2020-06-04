const ordersExample = [
    {
        PerformedByAPartner: false,
        DeliveredBy: false,
        payment: false,
        cash: false,
        paymentOnline: false,
        userName: "Володимер",
        userAddress: "Вулиця Правди 25",
        userPhone: 3830963528,
        userComment: "Новий комент",
        userId: "5472",
        deliveryTime: "2020-05-13T22:22", // когда  нужно доставить
        deliveryData: "2020-05-03T15:22", //время когда появился заказ
        responsiblePartner: "id партнера",
        responsibleCourier: "id driver",
        city: "Шепетівка",
        order: [
            {
                id: 3,
                productName: "Цезар",
                productWeight: "275 г",
                ingredients: "Куряче філе на грилі, бекон, яйце, томати, салат ромен, пармезан, часникові крутони, соус Caesar",
                price: 130,
                productImageUrl: "https://mafia.ua/storage/editor/fotos/450x450/cezar_1562848584478.jpeg",
                keywords: ['салати'],
                weight: 275,
                stopList: false,
            }],
        price: 150,
        orderData: "25-05-2020T15:00"
    }
]