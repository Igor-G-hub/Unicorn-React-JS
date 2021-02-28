import React, { Component } from 'react';
import dataBase from './dataBase.json';

class BasePrice extends Component {
    state = {  
        input: "",
        inputConfirm: "",
        messages: {
                    added: "",
                    removed: "",
                    errorEmpty: "",
                    errorWhenEmptyRemoving: ""
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

       const basePrice = this.state.input;

       this.setState({inputConfirm: this.state.input});
       this.setState(prevState => ({
           messages: {...prevState.messages, errorEmpty: "", added: "Base price " + basePrice + " has been added to product"}
       }));

       dataBase[index].basePrice = this.state.input;
       console.log(dataBase[index].basePrice);
    }

    handleRemoveBasePrice = () => {
        let index;
        for (let i = 0; i < dataBase.length; i++) {
            if(dataBase[i].serialNumber == this.props.search) {
                index = i;
               break;
            }
        }
      
        const previousBasePrice = dataBase[index].basePrice;

        if (( dataBase[index].basePrice !== "") && ( dataBase[index].basePrice !== 0))  {
            dataBase[index].basePrice = "";
            this.setState(prevState => ({
                messages: {...prevState.messsages, removed: "Previous base price " + previousBasePrice + " has been removed"}
            }));
        } else {
            this.setState(prevState => ({
                messages: {...prevState.messsages, errorEmpty: "This product does not have base price"}
            }));
        }

        console.log(dataBase[index].basePrice);

    }
    

    render() { 
        return ( 
                    <div className="base-price">
                        <div className="base-price-input">
                            <h4>{this.state.messages.added}</h4>
                            <h4>{this.state.messages.removed}</h4>
                            <h5 className="base-price-message">{this.state.messages.errorEmpty}</h5>
                            <label>Add new base price for part {this.props.search}:</label>
                            <input type="number" onChange={(e) => this.handleBasePriceInput(e.target.value)}></input>
                        </div>
                        <div className="base-price-buttons">
                            <button onClick={() => this.handleAddBasePrice()}>Add</button>
                            <button onClick={() => this.handleRemoveBasePrice()}>Remove price</button>
                            <button onClick={() => this.props.handleClosingFunc()}>Close</button>
                        </div>
                   </div>
         );
    }
}
 
export default BasePrice;