import { createStore, combineReducers, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import testReducer from './reducers/testReducer';
import initialReducer from './reducers/initialReducer';

const rootReducer = combineReducers({
    test: testReducer,
    initial: initialReducer
});

const store = createStore(rootReducer, applyMiddleware(ReduxThunk));
export default store;