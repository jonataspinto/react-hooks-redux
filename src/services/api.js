import axios from 'axios'

const api = axios.create({ baseURL: 'https://reqres.in/api/' })

export const getUsers = async body =>{
    const res = await api.get(`/users?page=${body}`)
    return await res.data
}