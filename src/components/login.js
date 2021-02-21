import React, { Component } from 'react';
import close from './times.svg';
import Credentials from './credentials.json';

class Login extends Component {
    state = {   }

    render() {
            return (
            <div className="login">
                <img src={close} alt="close button" onClick={() => this.props.handleCloseBtn()}/>
                <h3>Login for {this.props.credentials.department}!</h3>
                <h4>Please enter username and password:</h4> 
                <h6>{this.props.errorTryLogin}</h6>
                <form onSubmit={(event) => this.props.handleSubmit(event)}>
                     <label className="" htmlFor="name">Username:</label><br></br>
                        <h6>{this.props.errorMessageName}</h6>
                     <input type="text" id="name" placeholder="enter username..." minLength="5" maxLength="20" required onChange={(e) => this.props.handleInputName(e.target.value)}/><br></br>   
                     <label htmlFor="password">Password:</label><br></br>
                        <h6>{this.props.errorMessagePass}</h6>
                     <input type="password" id="password" placeholder="enter password..." minLength="5" maxLength="20" required onChange={(e) => this.props.handleInputPass(e.target.value)}/> <br></br> 
                     <button type="submit">Sign in</button>


                </form>
            </div>
          );
    }
}
 
export default Login;