import {START_SESSION, FINISH_SESSION} from '../../actions/mainA';

const reducer = (state = {}, action) => {
    switch (action.type) {
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