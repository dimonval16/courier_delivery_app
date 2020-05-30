export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOG_OUT = 'LOG_OUT';
export const START_SESSION = 'START_SESSION';
export const FINISH_SESSION = 'FINISH_SESSION';

export const startSessionAC = () => {
    return {
        type: START_SESSION
    }
}

export const finishSessionAC = () => {
    return {
        type: FINISH_SESSION
    }
}

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