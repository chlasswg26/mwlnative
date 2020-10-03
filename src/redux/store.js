import { createStore, applyMiddleware, compose } from 'redux';
import { createLogger } from 'redux-logger';
import promiseMiddleware from 'redux-promise-middleware';
import rootReducer from './reducers';
import Reactotron from '../../ReactotronConfig';

const logger = createLogger();
const enhancer = applyMiddleware(promiseMiddleware, logger);
const reactotron = Reactotron.createEnhancer();
const store = createStore(rootReducer, compose(enhancer, reactotron));

export default store;
