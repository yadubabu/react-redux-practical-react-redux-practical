import { FETCH_USERS_REQUEST, FETCH_USERS_FAIL, FETCH_USERS_SUCCESS } from "../actions/actionTypes";

const initialState={
    users:[],
    errors:'',
    isLoading:false
}


 const userReducers=(state=initialState,action)=>{
    switch(action.type){
        case FETCH_USERS_REQUEST:
            return {...state,isLoading:true}
        case FETCH_USERS_SUCCESS:
            return {isLoading:false,users:action.data,errors:''}
        case FETCH_USERS_FAIL:
            return {isLoading:false,users:[],errors:action.data}
        default :
        return state;
    }
}

export default userReducers;