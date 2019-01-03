import React from 'react'
import {env} from '../../helpers'
import axios from 'axios'

export const getUser = () =>{
    const Url = `${env.apiUrl}/api/v1/getUsers`
    // const Url = 'http://react-ssr-api.herokuapp.com/users';
    return axios.get(Url)
    .then(response=>{
        return response.data ;
    })
}

export const insertData = (args) =>{
    const Url = `${env.apiUrl}/api/v1/register`
    return axios.post(Url,{
        userdata: args
    })
    .then(response =>{
        return response
    })
}

export const getUserData = (id) =>{
    const Url = `${env.apiUrl}/api/v1/getUserData`
    return axios.post(Url, {
        id
    }).then(response =>{
        return response.data
    })
}

export const updateUserData = (args, id) =>{
    const Url = `${env.apiUrl}/api/v1/updateUserData`
    return axios.post(Url, {
        data: args,
        id
    }).then(response =>{
        return response.data
    })
}

export const deleteUser = (id) =>{
    const Url = `${env.apiUrl}/api/v1/deleteUser`
    return axios.post(Url, {
        id
    }).then(response =>{
        return response.data
    })
}

