import React from 'react';
import {insertData} from '../services'
import axios from 'axios';
export const INSERT_DATA = 'INSERT_DATA'

export const insert_data = () => async dispatch => {
    const Url = 'http://react-ssr-api.herokuapp.com/users';
    const response = await axios.get(Url)
    console.log('response', response);
        dispatch({
            type: INSERT_DATA,
            payload: response
        })
}