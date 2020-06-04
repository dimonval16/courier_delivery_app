import handleNewSession from '../new_session_r/newSessionR';
import {
    START_SESSION,
    FINISH_SESSION,
    SET_ORDERS_CONTENT,
    START_NEW_ORDER,
    FINISH_ORDER,
    UPDATE_ORDERS_CONTENT
} from '../../actions/mainA';

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

        case SET_ORDERS_CONTENT:
            return {
                ...state,
                sessions:
                    state.sessions.map((
                        session, index) => (index === 0 ?
                        handleNewSession(session, action) : session
                    ))
            }

        case START_NEW_ORDER:
            return {
                ...state,
                sessions:
                    state.sessions.map((
                        session, index) => (index === 0 ?
                            handleNewSession(session, action) : session
                    ))
            }

        case UPDATE_ORDERS_CONTENT:
            return {
                ...state,
                sessions:
                    state.sessions.map((
                        session, index) => (index === 0 ?
                            handleNewSession(session, action) : session
                    ))
            }

        case FINISH_ORDER:
            return {
                ...state,
                sessions:
                    state.sessions.map((
                        session, index) => (index === 0 ?
                            handleNewSession(session, action) : session
                    ))
            }

        default:
            return {...state}
    }
}

export default reducer;