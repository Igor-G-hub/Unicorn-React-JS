import React, { Component } from 'react';
import Login from './login.js';

class Home extends Component {
    state = {  
        btnName: null,
        loginClassName: "login close"
    }

    handleOnClickWarehouse = () => {
        this.setState({btnName: "warehouse"});
        this.setState({loginClassName: "login"});
        
    };

    handleOnClickSales = () => {
        this.setState({btnName: "sales"});
        this.setState({loginClassName: "login"});
    }

    handleCloseBtn = () => {
        this.setState({loginClassName: "login close"});
    }

    

    render() { 
        console.log("home");
        return (
            <>
            <div className="btn-containers">
                 <button className="btn-warehouse" onClick={this.handleOnClickWarehouse}>Warehouse</button>
                 <button className="btn-sales" onClick={this.handleOnClickSales}>Sales</button>
            </div>
            <Login 
            btnName={this.state.btnName}
            loginClassName={this.state.loginClassName}
            handleCloseBtn={this.handleCloseBtn}
            handlingLogin={this.props.handlingLogin}
            />
            </>
          );
    }
}
 
export default Home;