const couriers = [
    {
        name: "Иван",
        lastName: "Иванов",
        patronymic: "Олександрович",
        city: "Шепетівка",
        phone: "0937774582",
        Editing: "2020-01-25T18:00", //за что отвечает?
        typePartners: "driver",
        dateOfRegistration: "2020-04-20",
        session: [ //почему session это массив?
            {
                start: "2020-05-22T10:00",
                endOfSession: "2020-05-22T21:30",
                deliveries: ["информация о доставке"],
                activDeliveries: [
                    {
                        PerformedByAPartner: false,
                        DeliveredBy: false,
                        payment: false,
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
                        price: 1150,
                        orderData: "25-05-2020T15:00"
                    }
                ],
            },
        ],
        balance: 1,
        equipment: "сумка",
        blockBalance: "1000",
        active: true, //за что отвечает этот параметр ?
        kls: [{date: "2020-05-10", bal: "65"}, {date: "2020-05-12", bal: "85"}], // kls ?
        zalDocument: "passport", // что это ?
        id: "124510"

    }
]