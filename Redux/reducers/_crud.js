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
        default :
            return state
    }
}