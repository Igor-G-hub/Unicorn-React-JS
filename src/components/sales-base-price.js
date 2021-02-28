import React, { Component } from 'react';
import dataBase from './dataBase.json';

class BasePrice extends Component {
    state = {  
        input: "",
        inputConfirm: "",
        messages: {
                    added: "",
                    removed: "",
                    errorEmpty: ""
                  }
    }

    handleBasePriceInput = (value) => {
        this.setState({input: value});
    }

    handleAddBasePrice = () => {
        let index;
       for (let i = 0; i < dataBase.length; i++) {
           if(dataBase[i].serialNumber == this.props.search) {
               index = i;
              break;
           }
       }

       if (this.state.input == "") {
           this.setState(prevState => ({
               messages: {...prevState.messsages, errorEmpty: "Please insert base price..."}
           }));
           return;
       }

       this.setState({inputConfirm: this.state.input});
       this.setState(prevState => ({
           messages: {...prevState.messages, errorEmpty: "", added: "Base price is added to product"}
       }));
    }

    render() { 
        return ( 
                    <div className="base-price">
                        <div className="base-price-input">
                            <h4>{this.state.messages.added}</h4>
                            <h5 className="base-price-message">{this.state.messages.errorEmpty}</h5>
                            <label>Add new base price for part {this.props.search}:</label>
                            <input type="number" onChange={(e) => this.handleBasePriceInput(e.target.value)}></input>
                        </div>
                        <div className="base-price-buttons">
                            <button onClick={() => this.handleAddBasePrice()}>Add</button>
                            <button>Remove price</button>
                            <button>Close</button>
                        </div>
                   </div>
         );
    }
}
 
export default BasePrice;