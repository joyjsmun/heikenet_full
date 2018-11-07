import axios from 'axios';
import {
    AUTH_SIGNUP,
    AUTH_SIGNUP_SUCCESS,
    AUTH_SIGNUP_FAILURE,
    AUTH_SIGNIN,
    AUTH_SIGNIN_SUCCESS,
    AUTH_SIGNIN_FAILURE
} from './ActionTypes';

/* Sign Up */

export function signupRequest(name,email,password) {
    return (dispatch) => {
        dispatch(signup());

        return axios.post('https://heikenet-backend.herokuapp.com/api/v1/register',{name,email,password})
        .then((response) => {
            dispatch(signupSuccess());
        }).catch((error) => {
            dispatch(signupFailure(error.response.data.code));
        });
    };
}

export function signup(){
    return{
        type: AUTH_SIGNUP
    }
}

export function signupSuccess(){
    return{
        type: AUTH_SIGNUP_SUCCESS,
    };
}

export function signupFailure(error){
    return{
        type: AUTH_SIGNUP_FAILURE,
        error
    };
}

/*Sign In*/

export function signinRequest(email,password){
    return(dispatch) => {
        // Inform SignIn API is starting
        dispatch(signin());

        //API Request
        return axios.post('https://heikenet-backend.herokuapp.com/api/v1/login',{email,password})
        .then((response) => {
            dispatch(signinSuccess(email));
    
        }).catch((error) =>{
            //Failed
        dispatch(signinFailure());
        });
    };
}

export function signin() {
    return{
        type:AUTH_SIGNIN
    };
}


export function signinSuccess(){
    return{
        type:AUTH_SIGNIN_SUCCESS
    };
}

export function signinFailure(){
    return{
        type:AUTH_SIGNIN_FAILURE
    };
}