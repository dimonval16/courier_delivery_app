import deliveries from './deliveries/deliveries';
import activeDeliveries from './deliveries/activeDeliveries';
import finishedDeliveries from './deliveries/finishedDeliveries';

const courier = {
    name: 'Dimas',
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
            start: '2020-05-22T10:00',
            endOfSession: '2020-05-22T21:30',
            deliveries,
            activeDeliveries,
            finishedDeliveries
        }
    ],
    balance: '125',
    equipment: 'сумка',
    blockBalance: '1000',
    active: true,
    kls: [{date: '2020-05-10', bal: '65'}, {date: '2020-05-12', bal: '85'}],
    zalDocument: 'passport',
    id: '124510'
}

export default courier;