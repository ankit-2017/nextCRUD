import React from 'react'
import {GET_USERS} from '../actions'

export const home_reducer = (state= {}, action) =>{
    switch (action.type) {
        case GET_USERS :
            console.log('payload', action.payload);
            return {
                ...state,
                user: action.payload
            }
            break;
    
        default:
            return state
    }
}
