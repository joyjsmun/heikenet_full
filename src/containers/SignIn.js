import React,{Component} from 'react';
import {SignIn} from '../components/pages/SignIn';
import {connect} from 'react-redux';
import {signinRequest} from '../actions/authentication';
import {Materialize} from 'materialize-css';


class SignIn extends Component {
    handleSignin = (email, password) => {
        return this.props.signinRequest(email, password).then(
            () => {
                if(this.props.status === "SUCCESS") {
                    // create session data
                    let signinData = {
                        isSignedIn: true,
                        username: email
                    };
 
                    document.cookie = 'key=' + btoa(JSON.stringify(signinData));
 
                    Materialize.toast('Welcome, ' + email + '!', 2000);
                    this.props.history.push('/dashboard');
                    return true;
                } else {
                    let $toastContent = $('<span style="color: #FFB4BA">Incorrect username or password</span>');
                    Materialize.toast($toastContent, 2000);
                    return false;
                }
            }
        );
    }

    

    render() {
        return (
            <div>
                <SignIn onLogin = {this.handleSignin}/>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return{
        status:state.authentication.signin.status
    }
}

const mapDispatchToProps = (dispatch) =>{
    return{
        signinRequest: (email,password) => {
            return dispatch(signinRequest(email,password));
        }
    }
}


export default connect(mapStateToProps,mapDispatchToProps)(SignIn);