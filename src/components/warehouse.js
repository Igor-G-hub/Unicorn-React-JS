import React, { Component } from 'react';
import dataBase from './dataBase.json';


class Warehouse extends Component {
        state = {
          activeForm:  {
                        serialNumber: true,
                        dateOfProd: true,
                        brandCarSElect: true,
                        }          
            }

    handleBrandSelector = () => {
       let arrayBrand = [];     

       for (let i = 0; i < dataBase.length; i++) {
           arrayBrand.push(dataBase[i].brand);
        };
        arrayBrand = arrayBrand.sort();
        arrayBrand = arrayBrand.filter((el, index, arr) => {
           if ((el !== arr[index + 1]) && ([index + 1] < arr.length)) {
               return arrayBrand.push(el);
                }
           if (index == arr.length - 1) {
               return arrayBrand.push(el);           
             }                
           } 
        );
     return arrayBrand;           
    } 

    handleCarSelector = (provjera) => {
        let arrayCar = [];
        arrayCar = this.handleBrandSelector();
        

    }

    handleEnableingSerialNumber = (condition) => {
          this.setState(prevState => ({
            activeForm: {...prevState.activeForm, serialNumber: true, dateOfProd: false, brandCarSElect: false}             
          }))
          if (!condition) {
              this.setState(prevState => ({
                activeForm: {...prevState.activeForm, serialNumber: true, dateOfProd: true, brandCarSElect: true}
              }))
              console.log(condition);
          }                    
    }

    handleEnableingDateOfProducitonOnFocus = (condition) => {
        this.setState(prevState => ({
          activeForm: {...prevState.activeForm, serialNumber: false, dateOfProd: true, brandCarSElect: false}             
        }))       
  }

  handleEnableingDateOfProducitonOnBlur = (condition) => {

        this.setState(prevState => ({
          activeForm: {...prevState.activeForm, serialNumber: true, dateOfProd: true, brandCarSElect: true}
        }))   
    }

  handleEnableingCarOnFocus = (condition) => {
    this.setState(prevState => ({
        activeForm: {...prevState.activeForm, serialNumber: false, dateOfProd: false, brandCarSElect: true}             
      }))       
    }
 
    handleEnableingCarOnBlur = (condition) => {
        this.setState(prevState => ({
            activeForm: {...prevState.activeForm, serialNumber: true, dateOfProd: true, brandCarSElect: true}
          }))
    }  

   
    render() { 
        return (
            <>
<div className="warehouse-main">
    <button className="logout-button">Logout</button>
    <h1>Warehouse</h1>
    <form>
        <label htmlFor="serial-number">Serial number:</label><br></br>
        <input disabled={this.state.activeForm.serialNumber ? undefined : "disabled"} 
        type="text" id="serial-number" placeholder="enter serial number..." 
        onChange={(e) => this.handleEnableingSerialNumber(e.target.value)}

        /> 
        <button type="submit">Search item</button> 
        <button type="submit">Add item</button> 
        <button type="submit">Remove item</button><br></br> 

        <label htmlFor="serial-number">Date of production:</label><br></br>
        <select disabled={this.state.activeForm.dateOfProd ? undefined : "disabled"} className="warehouse-year-select" 
                onFocus={(e) => this.handleEnableingDateOfProducitonOnFocus(e.target.value)}
                onBlur={(e) => this.handleEnableingDateOfProducitonOnBlur(e.target.value)}
        >
        <option value="2019">2020</option>
        <option value="2019">2019</option>
        </select>

        <span>/</span>
        <select className="warehouse-month-select" 
            disabled={this.state.activeForm.dateOfProd ? undefined : "disabled"}
            onFocus={(e) => this.handleEnableingDateOfProducitonOnFocus(e.target.value)}
            onBlur={(e) => this.handleEnableingDateOfProducitonOnBlur(e.target.value)}
        >
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>            
        <option value="6">6</option>
        <option value="7">7</option>
        <option value="8">8</option>
        <option value="9">9</option>
        <option value="10">10</option>
        <option value="11">11</option>
        <option value="12">12</option>
        </select>

        <button type="submit">Search item</button> 
        <button type="submit">Add item</button> 
        <button type="submit">Remove item</button><br></br>

        <label htmlFor="serial-number">Brand and car:</label><br></br>
        <select className="warehouse-brand-select" 
        disabled={this.state.activeForm.brandCarSElect ? undefined : "disabled"} 
        onFocus={(e) => this.handleEnableingCarOnFocus(e.target.value)}
        onBlur={(e) => this.handleEnableingCarOnBlur(e.target.value)}
        >
        {this.handleBrandSelector().map((brand, index) =>
            <option key={index} value={brand}>{brand}</option>   
                )}            
        </select> 

        <select className="warehouse-car-select" 
        disabled={this.state.activeForm.brandCarSElect ? undefined : "disabled"}
        onFocus={(e) => this.handleEnableingCarOnFocus(e.target.value)}
        onBlur={(e) => this.handleEnableingCarOnBlur(e.target.value)}
        >
            
            
        </select>       

        <button type="submit" onClick={() => this.handleCarSelector()}>Search item</button> 
        <button type="submit">Add item</button> 
        <button type="submit">Remove item</button>
        
                                                    
                                


                                </form>
                    </div>
            
            </>
          );
    }
}
 
export default Warehouse;