import {createStore, applyMiddleware} from 'redux';
import {initialData} from './initial_data/data';
import thunk from 'redux-thunk';
import reducer from '../reducers/mainR';

const store = createStore(reducer, initialData, applyMiddleware(thunk));

export default store;
