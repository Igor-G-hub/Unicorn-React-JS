import React, { Component } from 'react';
import './App.css';
import Home from './components/home';
import Warehouse from './components/warehouse';


class App extends Component {
  state = {  }


handlingSuccessfullyLogin = (condition) => {
    console.log(condition);
}


  render() { 
    console.log("app");
    return (
      <div className="background-set">

          <Home handlingLogin={this.handlingSuccessfullyLogin}/>




      </div>
      );
  }
}
 


export default App;
