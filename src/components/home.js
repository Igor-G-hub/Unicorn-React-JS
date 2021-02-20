import React, { Component } from 'react';
import Login from './login.js';

class Home extends Component {
    state = {  
        btnName: null,
       
    }

    handleOnClickWarehouse = () => {
        this.setState({btnName: "warehouse"});        
    };

    handleOnClickSales = () => {
        this.setState({btnName: "sales"});
    }

    handleCloseBtn = () => {
        this.setState({btnName: null});
    }

    render() {
      
        return (
            <>
            <div className="btn-containers">
                 <button className="btn-warehouse" onClick={this.handleOnClickWarehouse}>Warehouse</button>
                 <button className="btn-sales" onClick={this.handleOnClickSales}>Sales</button>
            </div>
            {this.state.btnName !== null ? 
            (<Login btnName={this.state.btnName}
            handleCloseBtn={this.handleCloseBtn}
            handlingLogin={this.props.handlingLogin}
            handlingDepartment={this.props.handlingDepartment}    
            />) : null}
            </>
          );
    }
}
 
export default Home;