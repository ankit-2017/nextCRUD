import React from 'react';
import {getUser} from '../services'
import axios from 'axios';
import {toastr} from 'react-redux-toastr'
import * as services from '../services'
import * as crudConstant from '../constants'

export const GET_USERS = 'GET_USERS'


export const get_users = () => {
    return async dispatch =>{
        await services.getUser()
        .then(response =>{
            if(response){
                console.log('response', response);
                dispatch({
                    type: GET_USERS,
                    payload: response
                })
                // toastr.success('users fetched successfully');
            }
        })
        .catch(error =>{
            toastr.error('error in fetch users', error);
        })
    }     
}

export const insert_data = (args) =>{
    console.log('args in action', args);
    return async dispatch =>{
        dispatch({
            type: crudConstant.INSERT_DATA_REQUEST
        })
        await services.insertData(args)
                .then(response=>{
                    if(response){
                        console.log('response', response);
                        dispatch({
                            type: crudConstant.INSERT_DATA_SUCCESS ,
                            payload: response
                        })
                        toastr.success('data submitted successfully');
                    }
                })
                .catch(error =>{
                    dispatch({
                        type: crudConstant.INSERT_DATA_FAILURE,
                        payload: error
                    })
                    toastr.error('data not submitted', error);
                })
    }
}