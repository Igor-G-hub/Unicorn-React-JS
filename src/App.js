import React, { Component } from 'react';
import './App.css';
import Home from './components/home';
import Warehouse from './components/warehouse';
import Sales from './components/sales';
import Credentials from './components/credentials.json';
import dataBase from './components/dataBase.json';


class App extends Component {
  state = {
    errorMessageName: "",
    errorMessagePass: "",
    errorTryLogin: "",

    successfullyLogin: {
                 condition: false,
                 conditionId: 0              
                        },

    credentials: {
            username: "", 
            password: "",
            department: null,    
            }, 
    selectorValues: {
            dateYear: "",
            dateMonth: "",
             brand: "",
             car: ""
           }                 
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
    };

    let found = false;
    for (let i = 0; i < Credentials.length; i++) {                      
         if ((this.state.credentials.username == Credentials[i].username) &&
             (this.state.credentials.password == Credentials[i].password) &&
             (this.state.credentials.department == Credentials[i].department)) { 

              this.setState(prevState => ({
                  successfullyLogin: {...prevState.successfullyLogin, condition: true, conditionId: 1}
              }));

              found = true;
              break;                    
            }                     
    } 

    if(!found) {
        this.setState(prevState => ({
            successfullyLogin: {...prevState.successfullyLogin, condition: false, conditionId: 2}
        }));
        this.setState({errorTryLogin: "Please enter correct username and password"});
    }         
}

  handleOnClickWarehouse = () => {
  this.setState(prevState => ({
      credentials: {...prevState.credentials, department: "warehouse"}
    }));        
  }

  handleOnClickSales = () => {
  this.setState(prevState => ({
    credentials: {...prevState.credentials, department: "sales"}
    }));
  }

  handleCloseBtn = () => {
    this.setState(prevState => ({
      credentials: {...prevState.credentials, department: null}
    }))
  }

  passingBrandSelector = (brand) => {
    this.setState(prevState => ({
    selectorValues: {...prevState.selectorValues, brand: brand}
    }))
    }

  handleLogOut = (value) => {
    this.setState(prevState => ({
      credentials: {...prevState.credentials,  username: "", password: "", department: null}
    }));

    this.setState(prevState => ({
      successfullyLogin: {...prevState.successfullyLogin,  condition: false}
    }));


  }

  render() { 
    
    let isLogin = this.state.successfullyLogin.condition;
    let department = this.state.credentials.department;

    return (
      <div className="background-set">

          {!isLogin ? (<Home 
          handleSubmit={this.handleSubmit} 
          handleInputName={this.handleInputName}
          handleInputPass={this.handleInputPass}
          handleOnClickWarehouse={this.handleOnClickWarehouse}
          handleOnClickSales={this.handleOnClickSales}
          handleCloseBtn={this.handleCloseBtn}
          credentials={this.state.credentials}
          errorMessageName={this.state.errorMessageName}
          errorMessagePass={this.state.errorMessagePass}
          errorTryLogin={this.state.errorTryLogin}
          />) : null}


          {isLogin && department == "warehouse" ?
          <Warehouse 
          brandSelector={this.passingBrandSelector}
          selectorValues={this.state.selectorValues}
          logout={this.handleLogOut}
          />  : null}

          {isLogin && department == "sales" ? 
          <Sales
          logout={this.handleLogOut}
          /> : null}
      
      </div>
      );
  }
}
 


export default App;
