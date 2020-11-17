import {createStore,compose, applyMiddleware} from 'redux';
import { indexReducer } from '../reducer/indexReducer';
import thunk from 'redux-thunk';
const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

export const index = createStore(
    indexReducer,
    composeEnhancers(
        applyMiddleware(thunk )
    )
)