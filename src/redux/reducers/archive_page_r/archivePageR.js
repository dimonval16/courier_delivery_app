import {
    SET_ARCHIVE_TAB_STATUS,
    SET_ARCHIVE_DELIVERIES,
    CLEAR_ARCHIVE_DELIVERIES
} from '../../actions/mainA';

const reducer = (state = {}, action) => {
    switch (action.type) {
        case CLEAR_ARCHIVE_DELIVERIES:
            return {
                ...state,
                archiveSession: {
                    ...state.archiveSession,
                    sessionId: 0,
                    startOfSession: '',
                    endOfSession: '',
                    archiveDeliveries: []
                }
            }

        case SET_ARCHIVE_DELIVERIES:
            return {
                ...state,
                archiveSession: {
                    ...state.archiveSession,
                    sessionId: action.session.sessionId,
                    startOfSession: action.session.startOfSession,
                    endOfSession: action.session.endOfSession,
                    archiveDeliveries: action.session.finishedDeliveries
                }
            }

        case SET_ARCHIVE_TAB_STATUS:
            return {
                ...state,
                tabStatus: action.newTab
            }

        default:
            return {...state}
    }
}

export default reducer;