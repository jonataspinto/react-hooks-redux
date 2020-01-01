import { TYPES } from './user.actions'

const initial_state = {
    users: [],
    totalPages: 0,
    user: {},
    loading: true
}

const userReducer = (state = initial_state, action) =>{
    switch (action.type) {
        case TYPES.GET_ALL:
            return {
                ...state, 
                users: action.users, 
                totalPages: action.totalPages,
                loading: action.loading
            }    
        default:
            return state
    }
}
export default userReducer