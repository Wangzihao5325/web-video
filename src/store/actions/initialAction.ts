import store from '../index';
import { INITIAL_DONE } from '../types/index';

let initialAction = {
    done: function () {
        store.dispatch({ type: INITIAL_DONE });
    }
}

export default initialAction;