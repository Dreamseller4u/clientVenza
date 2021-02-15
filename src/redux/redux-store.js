import  { applyMiddleware , createStore,combineReducers } from 'redux';
import locationReducer from './locationReducer';
import bikeReducer from './bikesReducer';
import userReducer from './usersReducer';
import thunkMiddleware from 'redux-thunk'
import {reducer as formReducer} from 'redux-form'
import adminReducer from './adminReducer'
import bookingReducer from './bookingReducer';
import searchReducer from './searchReducer';

let reduces = combineReducers(  {
    listPage : bikeReducer,
    otherPage: locationReducer,
    usersPage: userReducer,
    form: formReducer,
    admin:adminReducer,
    booking: bookingReducer,
    search: searchReducer
 });

let store = createStore(reduces, applyMiddleware(thunkMiddleware)) ;

window.store = store;
export default store;