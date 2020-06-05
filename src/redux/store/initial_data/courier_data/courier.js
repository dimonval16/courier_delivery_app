const courier = {
    name: 'Дмитрий',
    lastName: 'Иванов',
    patronymic: 'Олександрович',
    city: 'Шепетівка',
    phone: '0937774582',
    Editing: '2020-01-25T18:00',
    typePartners: 'driver',
    dateOfRegistration: '2020-04-20',
    isSessionActive: false,
    sessions: [
        {
            sessionId: 1,
            startOfSession: '2020-05-25T10:00',
            endOfSession: '2020-05-25T21:30',
            deliveriesData: [],
            allDeliveries: [],
            activeDeliveries: [],
            finishedDeliveries: []
        }
    ],
    balance: '125',
    equipment: 'сумка',
    blockBalance: '1000',
    active: true,
    kls: [{date: '2020-05-10', bal: '65'}, {date: '2020-05-12', bal: '85'}],
    zalDocument: 'passport',
    id: 1909
}

export default courier;

// Нажимаем старт отправляем обьект новой сессии на сервер, и получаем разрешение на активацию сессии.

// Каждый раз при обновлении страницы мне будет возвращаться обьект юсер в котором будет все. и при апдейте мне
// надо делать именно этот запрос.

// Указать диапазон возвращаемых сессий при гет юсер инфо при входе