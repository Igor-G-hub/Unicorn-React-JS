import React, { Component } from 'react';
import close from './times.svg';
import Credentials from './credentials.json';

class Login extends Component {
    state = {
        errorMessageName: "",
        errorMessagePass: "",
        errorTryLogin: "",

        credentials: {
            username: "", 
            password: "",
            department: ""
        },

        successfullyLogin: false,

    }

    handleInputName = (nameValue) => {
        if (/[^a-zA-Z -]/.test(nameValue)) {
            this.setState({errorMessageName: 'Please enter valid username...'});
          }  
        if (nameValue.trim() === '') {
            this.setState({errorMessageName: ""});
          } 
        this.setState(prevState => ({
           credentials: {...prevState.credentials, username: nameValue}  
        }))  
        this.setState(prevState => ({
            credentials: {...prevState.credentials, department: this.props.btnName}
        }));
        this.setState({errorTryLogin: ""});
        }
         

    handleInputPass = (passValue) => {
       
        if (passValue.trim() === '') {
            this.setState({errorMessagePass: ""});
          }
        this.setState(prevState => ({
            credentials: {...prevState.credentials, password: passValue}
        }));  
        this.setState({errorTryLogin: ""});
    }

    handleSubmit = (event) => {
        event.preventDefault();        
        if ((this.state.errorMessageName.length == 0) && (this.state.errorMessagePass.length == 0)) {
        } 

        for (let i = 0; i < Credentials.length; i++) {
             if ((this.state.credentials.username == Credentials[i].username) &&
                 (this.state.credentials.password == Credentials[i].password) &&
                 (this.state.credentials.department == Credentials[i].department)) {                        
                  this.setState({successfullyLogin: true});
                  break;  
                 } else {
                    this.setState({successfullyLogin: false});
                    this.setState({errorTryLogin: "Incorrect username or password. Please try again"});
                 }                 
            }
        this.props.handlingLogin(this.state.successfullyLogin);            
    }
   
    render() {
        console.log("login");
            return (
            <div className={this.props.loginClassName}>
                <img src={close} alt="close button" onClick={() => this.props.handleCloseBtn()}/>
                <h3>Login for {this.props.btnName}!</h3>
                <h4>Please enter username and password:</h4> 
                <h6>{this.state.errorTryLogin}</h6>
                <form onSubmit={(event) => this.handleSubmit(event)}>
                     <label className="" htmlFor="name">Username:</label><br></br>
                        <h6>{this.state.errorMessageName}</h6>
                     <input type="text" id="name" placeholder="enter username..." minLength="5" maxLength="20" required onChange={(e) => this.handleInputName(e.target.value)}/><br></br>   
                     <label htmlFor="password">Password:</label><br></br>
                        <h6>{this.state.errorMessagePass}</h6>
                     <input type="password" id="password" placeholder="enter password..." minLength="5" maxLength="20" required onChange={(e) => this.handleInputPass(e.target.value)}/> <br></br> 
                     <button type="submit">Sign in</button>


                </form>
            </div>
          );
    }
}
 
export default Login;