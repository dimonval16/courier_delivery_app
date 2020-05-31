import {LOGIN_SUCCESS, LOG_OUT} from '../../actions/mainA';

const reducer = (state = {}, action) => {
    switch (action.type) {
        case LOGIN_SUCCESS:
            return {
                ...state,
                status: true
            }

        case LOG_OUT:
            return {
                ...state,
                status: false
            }

        default:
            return {...state}
    }
}

export default reducer;