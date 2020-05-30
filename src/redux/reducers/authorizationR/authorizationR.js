import {LOGIN_SUCCESS, LOG_OUT, START_SESSION, FINISH_SESSION} from '../../actions/mainA';

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

        case START_SESSION:
            return {
                ...state,
                isSessionActive: true
            }

        case FINISH_SESSION:
            return {
                ...state,
                isSessionActive: false
            }

        default:
            return {...state}
    }
}

export default reducer;