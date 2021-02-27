import React, { Component } from 'react';
import dataBase from './dataBase.json';

class RemoveItems extends Component {
    state = { 

        serialNumber: "",

        messages: {
                error: "",
                confirm: ""
                },
        index: null,
        confirmRender: null        
     }

      handleInput = (value) => {

        const serialNumber = this.state.serialNumber;

          this.setState(prevState => ({
            messages: {...prevState.messages, error: ""}
        }))

        if (serialNumber == "") {
            this.setState(prevState => ({
                messages: {...prevState.messages, error: "Please fill input field..."}
            }));
            return false;
        } 

        let found = false;
        for (let i = 0; i < dataBase.length; i++) {
           if (dataBase[i].serialNumber == serialNumber) {
                found = true;
                break;
            }
        }

        if (!found) {
            this.setState(prevState => ({
                 messages: {...prevState.messages, error: "Serial number does not exist..."}
                })); 
            return false;     
        }

        let arraySerNum = [];
        for (let i = 0; i < dataBase.length; i++) {
            arraySerNum.push(dataBase[i].serialNumber);
        }

        const index = arraySerNum.indexOf(serialNumber);

        this.setState({index: index});
        this.setState({confirmRender: true});
        this.setState(prevState => ({
            messages: {...prevState.messages, confirm: "This item has been removed:"}
           }));

        arraySerNum.splice(arraySerNum.indexOf(serialNumber), 1);

        console.log(dataBase);
      } 
      
    render() {
        return ( 
            <div className="remove-items">
                <h3>Remove item:</h3>
                <h4>{this.state.messages.error}</h4>
                <label className="remove-label">Enter serial number:</label><br></br>
                <input type="text" required 
                placeholder="enter serial number.."
                onChange={(e) => this.setState({serialNumber: e.target.value})}
                />
                <br></br>
                <div>
                    <button onClick={(e) => this.handleInput(e)}>Remove</button>
                    <button id={this.props.buttonIds.closeRemoveButton} onClick={(event) => this.props.handleClosingFunction(event.target.value, event.target.id)} >Close</button>
                </div>
                <h5>{this.state.messages.confirm}</h5>

            <div>
            {this.state.confirmRender ?
            (<div>
                <i style={{paddingLeft: 10}}>{"{"}</i>
                <p ><i>{'"serialNumber" : '}</i><i>{JSON.stringify(dataBase[this.state.index].serialNumber)}</i>{','}</p>
                <p><i>{'"dateOfProd": '}</i><i>{JSON.stringify(dataBase[this.state.index].dateOfProd)}</i>{','}</p>
                <p><i>{'"brand": '}</i><i>{JSON.stringify(dataBase[this.state.index].brand)}</i>{','}</p>
                <p><i>{'"car": '}</i><i>{JSON.stringify(dataBase[this.state.index].car.map(car => {return car}))}</i>{','}</p>
                <p><i>{'"basePrice": '}</i><i>{JSON.stringify(dataBase[this.state.index].basePrice)}</i>{','}</p>
                <p><i>{'"action": {'}</i></p>
                <p style={{paddingLeft: 60}}><i>{'"startDate" : '}</i><i>{JSON.stringify(dataBase[this.state.index].action.startDate)}</i>{','}</p>
                <p style={{paddingLeft: 60}}><i>{'"expireDate" : '}</i><i>{JSON.stringify(dataBase[this.state.index].action.expireDate)}</i>{','}</p>
                <p style={{paddingLeft: 60}}><i>{'"discountPercent" : '}</i><i>{JSON.stringify(dataBase[this.state.index].action.discountPercent)}</i></p>
                <p style={{paddingLeft: 60}}>{"}"}</p>
                <i style={{paddingLeft: 10}}>{'},'}</i>
            </div>) : null} 
            </div>       

                
                
                
            </div>
         );
    }
}
 
export default RemoveItems;