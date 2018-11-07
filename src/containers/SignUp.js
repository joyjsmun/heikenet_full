import React, {Component} from 'react';
import {SignUp} from '../components/pages/SignUp';
import {connect} from 'react-redux';
import {signupRequest} from '../actions/authentication';
import {Materialize} from 'materialize-css';

class SignUp extends Component{

handleSignup = (name,email,password) => {
    return this.props.signupRequest(name,email,password).then(
        () => {
            if(this.props.status === "SUCESS"){
                Materialize.toast('Success! Please sign in', 2000);
                this.props.history.push('/choose_account');
                console.log('signup success');
                return true;
            }else{

                let errorMessage = [
                    'Invalid Email',
                    'Password is too short',
                    'Email is already exits'
                ];
                
                let $toastContent = $('<span style="color: #FFB4BA">' + errorMessage[this.props.errorCode -1] + '</span>');
                Materialize.toast($toastContent, 2000);
                console.log('signup failed')
                return false;
            }
        }
    );
}

    render(){
        return(
            <div>
                <SignUp onSignup = {this.handleSignup}/>
            </div>
        )
    }
}


const mapStateToProps = (state) => {
    return{
        status:state.authentication.signup.status,
        errorCode:state.authentication.signup.error
    };
};

const mapDispatchToProps = (dispatch) => {
    return{
        signupRequest:(name,email,password) => {
            return dispatch(signupRequest(name,email,password));
        }
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);