import * as api from '../../services/api'

export const TYPES = {
    GET_ALL: 'GET_ALL',
    ERROR_GET_ALL: 'ERROR_GET_ALL'
}

export const getAll = body => async (dispatch, getState) =>{
    dispatch({
        type: TYPES.GET_ALL
    })
    try{
        const response = await api.getUsers(body)        
        dispatch({
            type: TYPES.GET_ALL,
            users : response.data,
            totalPages: response.total_pages,
            loading: false
        })
    }catch (error){
        dispatch({
            type: TYPES.ERROR_GET_ALL,
            error:  error
        })
    }
}