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

export const getUserData = (id) =>{
    return async dispatch =>{
        await services.getUserData(id)
                .then(response =>{
                    if(response){
                        dispatch({
                            type: crudConstant.GET_USER_DATA,
                            payload: response
                        })
                        // toastr.success(response.message)
                    }
                })
                .catch(error =>{
                    toastr.error('user data not fetched')
                })
    }
}

export const updateUserData = (args, id) =>{
    return async dispatch =>{
        await services.updateUserData(args, id)
            .then(response =>{
                if(response){
                    dispatch({
                        type: crudConstant.UPDATE_USER_SUCCESS,
                        payload: response
                    })
                    toastr.success(response.message)
                }
            })
            .catch(error =>{
                dispatch({
                    type: crudConstant.UPDATE_USER_FAILURE,
                    payload: error
                })
                toastr.error('user data not updated')
            })
    }
}

export const deleteUser = (id) =>{
    return async dispatch =>{
        await services.deleteUser(id)
            .then(response =>{
                if(response){
                    dispatch({
                        type: crudConstant.DELETE_USER_SUCCESS,
                        payload: response
                    })
                    toastr.success(response.message)
                }
            })
            .catch(error =>{
                dispatch({
                    type: crudConstant.DELETE_USER_FAILURE,
                    payload: error
                })
                toastr.error('user not deleted')
            })
    }
}