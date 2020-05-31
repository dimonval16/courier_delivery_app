export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOG_OUT = 'LOG_OUT';

export const logOutAC = () => {
    return {
        type: LOG_OUT
    }
}

export const loginAC = () => {
    return {
        type: LOGIN_SUCCESS
    }
}