import { createStore, combineReducers, applyMiddleware } from "redux";
import ReduxThunk  from 'redux-thunk'
import userReducer from './user/user.reducers'

const rootReducers = combineReducers({
    users: userReducer
})

const store = createStore(
    rootReducers,
    {},
    applyMiddleware(ReduxThunk)
)

export {store}