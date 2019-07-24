import store from '../index';
import { TEST } from '../types/index';

let testAction = {
    letUsTest: function () {
        store.dispatch({ type: TEST });
    }
}

export default testAction;