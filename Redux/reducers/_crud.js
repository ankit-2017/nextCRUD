import React from 'react'
import * as crudConstant from '../constants'

let initialState = {
    data_initiate : false
}

export const crud_operation = (state = initialState, action ) =>{
    switch (action.type) {
        case crudConstant.INSERT_DATA_REQUEST :
            state.data_initiate = true; 
            return {
                ...state
            }
        
        case crudConstant.INSERT_DATA_SUCCESS :
            state.data_initiate = false
            return {
                ...state,
                userdata: action.payload
            }

        case crudConstant.INSERT_DATA_FAILURE :
            return {
                ...state
            }
        case crudConstant.GET_USER_DATA:
            return {
                ...state,
                user_details: action.payload
            }
        case crudConstant.UPDATE_USER_SUCCESS:
            return {
                ...state,
                updated_user: action.payload
            }
        case crudConstant.DELETE_USER_SUCCESS:
            console.log('action.payload', action.payload);
            return {
                ...state,
                deleted_user: action.payload
            }
        default :
            return state
    }
}