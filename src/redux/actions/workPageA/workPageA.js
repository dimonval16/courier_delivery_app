export const SET_TAB_STATUS = 'SET_TAB_STATUS';

export const setTabStatusAC = newValue => {
    return {
        type: SET_TAB_STATUS,
        newValue
    }
}