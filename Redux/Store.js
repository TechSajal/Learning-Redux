import {createStore,applyMiddleware} from 'redux';
import {Reducers} from '../Redux/Reducer';
import createSagaMiddleware from 'redux-saga';
import SagaData from './Saga';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(Reducers,applyMiddleware(sagaMiddleware));

sagaMiddleware.run(SagaData);

export default store;

