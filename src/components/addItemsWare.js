import React, { Component } from 'react';
import dataBase from './dataBase.json';

class AddItems extends Component {
    state = { 
        addInputs: {
                    serialNumber: "",
                    dateOfProdYear: "",
                    dateOfProdMonth: "",
                    brand: "",
                    car: ""
                    },
              ids:  {                  
                    idSerNum: "idSerNum",
                    idYear: "idYear",
                    idMonth: "idMonth",
                    idBrand: "idBrand",
                    idCar: "idCar"  
                    },
        messages: {
                    error: "",
                    confirm: "" 
                  }        
    }

    handleAddInputs = (value, event) => {
     
        const ids = this.state.ids;


    if (event == ids.idSerNum) {
        this.setState(prevState => ({
            addInputs: {...prevState.addInputs, serialNumber: value}
        }))
      };

    if (event == ids.idYear) {
        this.setState(prevState => ({
            addInputs: {...prevState.addInputs, dateOfProdYear: value}
        }))
      };  
      
      if (event == ids.idMonth) {
        this.setState(prevState => ({
            addInputs: {...prevState.addInputs, dateOfProdMonth: value}
        }))
      }; 
      
      if (event == ids.idBrand) {
        this.setState(prevState => ({
            addInputs: {...prevState.addInputs, brand: value}
        }))
      }; 

      if (event == ids.idCar) {
        this.setState(prevState => ({
            addInputs: {...prevState.addInputs, car: value}
        }))
      };   
    }

    handleAddData = (event) => {
        event.preventDefault();

        const inputs = this.state.addInputs;

        this.setState(prevState => ({
            messages: {...prevState.messages, error: ""}
        }))

        if ((inputs.dateOfProdYear == "") || (inputs.dateOfProdMonth == "")) {
            this.setState(prevState => ({
                messages: {...prevState.messages, error: "Please fill all input fields..."}
            }));
            return false;
        } 

        let found = false;
        for (let i = 0; i < dataBase.length; i++) {
           if (dataBase[i].serialNumber == inputs.serialNumber) {
                found = true;
                break;
            }
        }

        if (found) {
            this.setState(prevState => ({
                 messages: {...prevState.messages, error: "Serial number already exist..."}
                })); 
            return false;     
        }

        dataBase.push(
            {
                "serialNumber": inputs.serialNumber,
                "dateOfProd": inputs.dateOfProdYear + "-" + inputs.dateOfProdMonth,
                "brand": inputs.brand,
                "car": [inputs.car],
                "basePrice": "",
                "action": {
                        "startDate":"",
                        "expireDate":"",
                        "discountPercent": ""
                        }
                }
        )

        this.setState(prevState => ({
            messages: {...prevState.messages, confirm: "Item number " + this.state.addInputs.serialNumber + " is inserted in data base."}
           }));   
        
    }

    handleClear = () => {
        this.setState(prevState => ({
            addInputs: {...prevState.addInputs, serialNumber: "", dateOfProdYear: "", 
            dateOfProdMonth: "", brand: "", car: ""}
        }))
        this.setState(prevState => ({
            messages: {...prevState.messages, error: "", confirm: ""}
        }))    
    }
     
    render() { 
        console.log(dataBase);
        return ( 
            
            <div className="add-items">
                    <h3>Add part:</h3>
                    <h5>{this.state.messages.confirm}</h5>
                    <p>{this.state.messages.error}</p>
                    <form onSubmit={(e) => this.handleAddData(e)}>      
                        <label>Serial number:</label><br></br>
                        <input value={this.state.addInputs.serialNumber} id={this.state.ids.idSerNum} type="text" required placeholder="enter serial number.."
                        onChange={(e) => this.handleAddInputs(e.target.value, e.target.id)}    
                        >
                        </input><br></br>
                        <label>Date of production:</label><br></br>
                        <div className="select">
                            <select id={this.state.ids.idYear} value={this.state.addInputs.dateOfProdYear}
                            onChange={(e) => this.handleAddInputs(e.target.value, e.target.id)}
                            >
                                <option></option>
                                <option value="2021">2021</option>
                                <option value="2020">2020</option>
                                <option value="2019">2019</option>
                                <option value="2018">2018</option>
                                <option value="2017">2017</option>
                            </select>
                            <span>/</span>
                            <select className="add-select-month" id={this.state.ids.idMonth} value={this.state.addInputs.dateOfProdMonth}
                            onChange={(e) => this.handleAddInputs(e.target.value, e.target.id)}
                            >
                                <option></option>  
                                <option value="01">1</option>  
                                <option value="02">2</option>  
                                <option value="03">3</option>  
                                <option value="04">4</option>  
                                <option value="05">5</option>  
                                <option value="06">6</option>  
                                <option value="07">7</option>  
                                <option value="08">8</option>  
                                <option value="09">9</option>  
                                <option value="10">10</option>  
                                <option value="11">11</option>  
                                <option value="12">12</option>  
                            </select>
                        </div>
                        <br></br>    
                        <label>Brand:</label><br></br>
                        <input id={this.state.ids.idBrand} type="text" 
                        required placeholder="brand..." value={this.state.addInputs.brand}
                        onChange={(e) => this.handleAddInputs(e.target.value, e.target.id)}
                        >
                        </input><br></br>
                        <label>Car:</label><br></br>
                        <input className id={this.state.ids.idCar}  type="text" 
                        required placeholder="car..." value={this.state.addInputs.car}
                        onChange={(e) => this.handleAddInputs(e.target.value, e.target.id)}
                        >
                        </input><br></br>
                        <div className="buttons">
                            <button type="submit">Add</button>
                            <button onClick={() => this.handleClear()}>Clear</button>
                            <button id={this.props.buttonIds.closeAddButton}onClick={(e) => this.props.handleClosingFunction(e.target.value, e.target.id)}>Close</button>
                        </div>
                    </form>  

            </div>
                
         );
    }
}
 
export default AddItems;