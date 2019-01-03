import {combineReducers} from 'redux'
import {home_reducer} from './home_reducer'
import {crud_operation} from './_crud'
import {reducer as toastrReducer} from 'react-redux-toastr'

export default combineReducers({
    home_reducer,
    insertData: crud_operation,
    toastr: toastrReducer,
})