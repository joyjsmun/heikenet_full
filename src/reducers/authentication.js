import * as types from '../actions/ActionTypes';

const initialState = {
    signin:{
        status: 'INIT'
    },
    signup:{
        status:'INIT',
        error:-1
    },
    status:{
        valid:false,
        isSignedIn: false,
        currentUser:''
    }
};

export default function authentication(state=initialState,action){
    switch(action.type){
        case types.AUTH_SIGNUP:
            return{
                ...state,
                signup: {
                    status: 'WAITING',
                    error: -1
                }
            }
        case types.AUTH_SIGNUP_SUCCESS:
            return {
                ...state,
                signup:{
                    ...state.signup,
                    status: 'SUCCESS'
                }
            }
        case types.AUTH_SIGNUP_FAILURE:
            return {
                ...state,
                signup:{
                    status: 'FAILURE',
                    error: action.error
                }
            }

        case types.AUTH_SIGNIN:
        return{
            ...state,
            signin:{
                status: 'WAITING'
            }
        }
        case types.AUTH_SIGNIN_SUCCESS:
        return{
            ...state,
            signin:{
                status:'SUCCESS'
            },
            status:{
                ...state.status,
                isSignedIn:true,
                currentUser:action.email
            }
        }
        case types.AUTH_SIGNIN_FAILURE:
            return{
                ...state,
                signin:{
                    status:'FAILURE'
                }
            }

        default:
            return state;
    }
}
