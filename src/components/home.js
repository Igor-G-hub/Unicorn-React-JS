import React, { Component } from 'react';
import Login from './login.js';

class Home extends Component {
    state = {  
               
    }

    render() {
        
        return (
            <>
            <div className="btn-containers">
                 <button className="btn-warehouse" onClick={() => this.props.handleOnClickWarehouse()}>Warehouse</button>
                 <button className="btn-sales" onClick={() => this.props.handleOnClickSales()}>Sales</button>
            </div>
            {this.props.credentials.department !== null ? 
            (<Login 
            handleCloseBtn={this.props.handleCloseBtn}
            handleSubmit={this.props.handleSubmit}
            handleInputName={this.props.handleInputName}
            handleInputPass={this.props.handleInputPass} 
            credentials={this.props.credentials}
            errorMessageName={this.props.errorMessageName}
            errorMessagePass={this.props.errorMessagePass}
            errorTryLogin={this.props.errorTryLogin}   
            />) : null}
            </>
          );
    }
}
 
export default Home;