import { applyMiddleware ,compose} from 'redux';
import {combineReducers,createStore} from 'redux';
import thunk from 'redux-thunk';
import laptopReducers from './reducers/laptopReducer';
import mobileReducers from './reducers/mobileReducer';
import  userReducers from './reducers/userReducers';
 import logger from 'redux-logger';
const rootReducers=combineReducers({
    laptops:laptopReducers,
    mobiles:mobileReducers,
    users:userReducers
})
const store=createStore(rootReducers,compose(applyMiddleware(thunk,logger),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()));

export default store;