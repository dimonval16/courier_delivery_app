import courier from './courierData/courier';

export const initialData = {
    authorization: {
        status: true,
        isSessionActive: false
    },
    sideDrawer: {
        items: [
            { title: 'Профиль', icon: 'account_circle' },
            { title: 'Контакты', icon: 'call' },
            { title: 'Архив', icon: 'archive' },
            { title: 'Выйти', icon: 'exit_to_app' }
        ]
    },
    user: courier
}