import {combineReducers} from 'redux'
import {home_reducer} from './home_reducer'
import {reducer as toastrReducer} from 'react-redux-toastr'

export default combineReducers({
    home_reducer,
    toastr: toastrReducer
})