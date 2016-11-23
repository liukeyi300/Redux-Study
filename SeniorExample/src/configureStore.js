/**
 * Created by Liukeyi on 2016/11/23.
 */
import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import createLogger from 'redux-logger';
import rootReducer from './reducer';

const loggerMiddleware = createLogger();

const createStoreWidthMiddleware = applyMiddleware(
    thunkMiddleware,
    loggerMiddleware
)(createStore);

export default function configureStore(initialState) {
    return createStoreWidthMiddleware(rootReducer, initialState);
}