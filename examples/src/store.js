import { applyMiddleware, createStore, combineReducers  } from 'redux';
import { reducer as formReducer } from 'redux-form';
import thunk from 'redux-thunk';
import promise from 'redux-promise';
import createLogger from 'redux-logger';

const logger = createLogger();

const reducers = {
  form: formReducer
}
const reducer = combineReducers(reducers)
export default createStore(reducer, applyMiddleware(thunk, promise, logger)); 
