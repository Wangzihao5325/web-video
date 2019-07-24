import { TEST } from '../types/index';

interface stateValue {
    isShow: boolean;
}

interface testActionValue {
    type: String;
}

const initialState = {
    isShow: false
}

const reducer = (state: stateValue = initialState, action: testActionValue) => {
    switch (action.type) {
        case TEST:
            return {
                ...state,
                isShow: !state.isShow
            };
        default:
            return state;
    }
}

export default reducer;