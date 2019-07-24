import { INITIAL_DONE } from '../types/index';

interface initialValue {
    isDone: boolean
}

interface actionValue {
    type: string
}

const initialState = {
    isDone: false
}

const reducer = (state: initialValue = initialState, action: actionValue) => {
    switch (action.type) {
        case INITIAL_DONE:
            return {
                ...state,
                isDone: true
            }
        default:
            return state;
    }
}

export default reducer;