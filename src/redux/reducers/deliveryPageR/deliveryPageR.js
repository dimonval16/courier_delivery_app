import {SET_DELIVERY_CONTENT, CLEAR_DELIVERY_INFO} from '../../actions/mainA';

const reducer = (state = {}, action) => {
    switch (action.type) {
        case SET_DELIVERY_CONTENT:
            return {
                ...state,
                deliveryId: action.deliveryId,
                address: action.userAddress,
                userName: action.userName
            }

        case CLEAR_DELIVERY_INFO:
            return {
                ...state,
                deliveryId: '',
                address: '',
                userName: ''
            }

        default:
            return {...state}
    }
}

export default reducer;