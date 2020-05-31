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