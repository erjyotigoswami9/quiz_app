import { legacy_createStore , combineReducers, applyMiddleware } from 'redux'
import { } from 'react-redux'
import { logger } from 'redux-logger'
import { thunk } from 'redux-thunk'
import { indexReducer, quizReducer } from './reducers';

let rootReducers = combineReducers({
    quiz : quizReducer ,
    index : indexReducer 
}) ;

export const store = legacy_createStore(rootReducers, applyMiddleware( thunk))