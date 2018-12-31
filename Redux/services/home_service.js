import React from 'react'
import {env} from '../../helpers'
import axios from 'axios'

export const insertData = (callback) =>{
    // const Url = `${env.apiUrl}/api/postData`
    const Url = 'http://react-ssr-api.herokuapp.com/users';
    const response = axios.get(Url)
    return callback(response)
}

