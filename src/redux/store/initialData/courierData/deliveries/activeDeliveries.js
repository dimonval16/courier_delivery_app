const activeDeliveries = [
    {
        deliveryId: 1,
        PerformedByAPartner: false,
        DeliveredBy: false,
        payment: true,
        cash: false,
        paymentOnline: true,
        userName: 'Андрій Васильович',
        userAddress: 'вул. Олени Бджілки 31А',
        userPhone: '0963528223',
        userComment: '',
        userId: '5473',
        deliveryTime: '2020-05-25T17:24',
        deliveryData: '2020-05-25T16:26',
        responsiblePartner: 'id партнера',
        partnerName: 'Mac Donalds',
        partnerAddress: 'вул. Урлівська 12',
        responsibleCourier: 'id courier',
        city: 'Шепетівка',
        orders: [
            {
                id: 1,
                productName: 'Плохой Бутер',
                productWeight: '100 г',
                ingredients: 'Куряче філе на грилі, бекон, яйце, томати, салат ромен, пармезан, часникові крутони, соус Caesar',
                price: 200,
                productImageUrl: 'https://mafia.ua/storage/editor/fotos/450x450/cezar_1562848584478.jpeg',
                keywords: ['бургери'],
                weight: 100,
                stopList: false,
            }],
        price: 200,
        orderData: '2020-05-25T16:23'
    }
];

export default activeDeliveries;