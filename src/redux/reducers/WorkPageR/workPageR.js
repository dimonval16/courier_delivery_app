import {SET_TAB_STATUS} from '../../actions/mainA';

const reducer = (state = {}, action) => {
    switch (action.type) {
        case SET_TAB_STATUS:
            return {
                ...state,
                tabStatus: action.newValue
            }

        default:
            return {...state}
    }
}

export default reducer;