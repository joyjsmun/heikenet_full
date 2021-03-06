import React, { Component } from 'react';
import  {Link,NavLink,Redirect} from 'react-router-dom';
import './SignUp.scss';
import {Image} from 'react-bootstrap';
//import axios from 'axios';

class SignUp extends Component {
    constructor() {
        super();

        this.state = {
            name : '',
            email:'',
            password : '',
            hasAgreed: false,
            redirect: false
        }

        this.handleChange = this.handleChange.bind(this);
        //this.handleSubmit = this.handleSubmit.bind(this);
        this.handleSignup = this.handleSignup.bind(this);
        
    }

    handleChange (e) {
        let target = e.target;
        let value = target.type === 'checkbox' ? target.checked : target.value;
        let name = target.name;

        this.setState({
            [name]:value
        });
    }

    handleSignup = () => {

        let name = this.state.name;
        let email = this.state.email;
        let password = this.state.password;


        this.props.onSignup(name,email,password).then(
            (result) => {
                if(!result) {
                    this.setState({
                        name: '',
                        email: '',
                        password: ''
                    });
                }
            }
        );
    }
 
    // handleSubmit(e) {
    //     e.preventDefault();
    //     this.setState({redirect:true});
        
    //    console.log('The form was submitted with the following data:');
    //    console.log(this.state);

    //    axios.post('https://heikenet-backend.herokuapp.com/api/v1/register',{
    //         name:this.state.name,
    //         email:this.state.email,
    //         password:this.state.password,
    //         // need to add more data to send to the server
    // })
    
    
    // .then(function (res) {
    //     console.log(res);
        
    //     if(res.data === 'ok'){
    //         console.log("signup success");
            
    //     }
    //   })
    //   .catch(function (error) {
    //     console.log(error);
    //     console.log('signup failed');
    //   })


      /* need to fix redirect:false => true  */
    //   .then(()=> this.setState({redirect:true}))   
    // console.log('The form was submitted with the following data: after redirect changed');
    // console.log(this.state);
       
  // }
        render() {
        //     const { redirect } = this.state;

        // if (redirect) {
        // return <Redirect to='/choose_account'/>;
        // }
        

        return (
            <div className="Background">
                <div className="App__Aside">
                <h1><Image src="assets/logo2.svg" />HeikeNet</h1>
                </div>
                <div className="App__Form">
                <div className="FormTitle">

                        <NavLink exact to="/signup_form" activeClassName="FormTitle__Link--Active" className="FormTitle__Link ">Join Heike Network</NavLink>
                </div>
                 <div className="FormInput">
                        <div className="FormCenter">
                                <div className="FormField">
                                    <label className="FormField__Label" htmlFor="password">Name</label>
                                    <input type="text" 
                                    id="name" 
                                    className="FormField__Input" 
                                    placeholder="Enter your full name" 
                                    name="name" 
                                    value={this.state.name} 
                                    onChange={this.handleChange}/>
                                </div>
                            <form className="FormField" onSubmit={this.handleSignup} >
                                <div className="FormField">
                                    <label className="FormField__Label" htmlFor="email">Email</label>
                                    <input 
                                    type="text" 
                                    id="email" 
                                    className="FormField__Input" 
                                    placeholder="Enter your email address" 
                                    name="email" 
                                    value={this.state.email} 
                                    onChange={this.handleChange}/>
                                </div>
                                <div className="FormField">
                                    <label className="FormField__Label" htmlFor="password">Password</label>
                                    <input 
                                    type="password" 
                                    id="password" 
                                    className="FormField__Input" 
                                    placeholder="Enter your Password" 
                                    name="password" 
                                    value={this.state.password} 
                                    onChange={this.handleChange}/>
                                </div>
                                
                                 <div className="FormField">
                                    <label className="FormField__CheckboxLabel">
                                        <input 
                                        className="FormField__Checkbox" 
                                        type="checkbox" name="hasAgreed" 
                                        value={this.state.value} 
                                        onChange={this.handleChange}/>
                                        I agree all statement in <Link to="#"href="#" className="FormField__TermsLink">terms of service</Link>
                                    </label>
                                </div>

                                <div className="FormField">
                                <button className="FormField__Button mr-20" type="submit">Sign Up</button>
                                <Link to="/signin" className="FormField__Link haveMember">I'm already member</Link>
                                </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>    
            
        );
    }
}

export default SignUp;