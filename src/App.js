import React, { Component } from 'react';
import './App.css';
import Home from './components/home';
import Warehouse from './components/warehouse';
import Sales from './components/sales';


class App extends Component {
  state = {
    isLogedIn: false,

    department: ""
  }  

handlingSuccessfullyLogin = (condition) => {  
    this.setState({isLogedIn: condition}); 
    console.log('App: ', this.state.isLogedIn);  
    console.log(condition); 
}

  render() { 
    return (
      <div className="background-set">

          {<Home handlingLogin={this.handlingSuccessfullyLogin} handlingDepartment={this.handlingDepartment}/>}




      </div>
      );
  }
}
 


export default App;
