import React from 'react';
import {insertData} from '../services'
import axios from 'axios';
import {toastr} from 'react-redux-toastr'
export const INSERT_DATA = 'INSERT_DATA'

export const insert_data = () => async dispatch => {
    const Url = 'http://react-ssr-api.herokuapp.com/users';
    const response = await axios.get(Url)
    // console.log('response', response);
    if(response){
        toastr.success('','data fetched successfully');
    }
       return dispatch({
            type: INSERT_DATA,
            payload: response
        })
}