import React from 'react'
import {INSERT_DATA} from '../actions'

export const home_reducer = (state= {}, action) =>{
    switch (action.type) {
        case INSERT_DATA :
            console.log('payload', action.payload.data);
            return {
                ...state,
                user: action.payload.data
            }
            break;
    
        default:
            return state
    }
}
