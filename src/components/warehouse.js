import React, { Component } from 'react';
import dataBase from './dataBase.json';
import SelectedItems from './selectedItems';


class Warehouse extends Component {
        state = {

          activeForm:  {
                        serialNumber: true,
                        dateOfProd: true,
                        brandCarSElect: true,
                        },
          search: {
                   serialNumber: "",
                   dateOfProd: "",
                   brand: "",
                   car: ""
                  }                  
        }  

    handleBrandSelectorOptions = () => {
       let arrayBrand = ["",];     

       for (let i = 0; i < dataBase.length; i++) {
           arrayBrand.push(dataBase[i].brand);
        };
        arrayBrand = arrayBrand.sort();
        arrayBrand = arrayBrand.filter( (el, index, arr) => {
           if ((el !== arr[index + 1]) && ([index + 1] < arr.length)) {
               return arrayBrand.push(el);
                }
           if (index == arr.length - 1) {
               return arrayBrand.push(el);           
             }                
           } 
        );
      if (this.props.selectorValues.brand !== "") {
        this.handleCarSelectorOptions();
        }    
     return arrayBrand;
                
    } 

    handleCarSelectorOptions = () => {
      let arrayCar = ["",];
      dataBase.map( item => { 
         if (item.brand == this.props.selectorValues.brand) {
             if (item.car.length == 1) {
                  arrayCar.push(item.car[0]);
                   } else { 
                           item.car.map( car => {
                           arrayCar.push(car);
                          })
                      }        
              }
          
        });

          arrayCar = arrayCar.sort();
          arrayCar = arrayCar.filter( (el, index, arr) => {
            if ((el !== arr[index + 1]) && ([index + 1] < arr.length)) {
                return arrayCar.push(el);
                }
            if (index == arr.length - 1) {
                return arrayCar.push(el);           
              }                
            } 
          );
    return arrayCar;        
    }   
     
    handleEnableingSerialNumber = (condition) => {
          this.setState(prevState => ({
            activeForm: {...prevState.activeForm, serialNumber: true, dateOfProd: false, brandCarSElect: false}             
          }))
          if (!condition) {
              this.setState(prevState => ({
                activeForm: {...prevState.activeForm, serialNumber: true, dateOfProd: true, brandCarSElect: true}
              }))
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

  handleSearchSerNumber = () => {
    console.log();
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
        <button type="submit" onClick={(e) => this.handleSearchSerNumber(e.target.value)}>Search item</button> 
        <button type="submit">Add item</button> 
        <button type="submit">Remove item</button><br></br> 
        <label htmlFor="">Date of production:</label><br></br>
        <select disabled={this.state.activeForm.dateOfProd ? undefined : "disabled"} className="warehouse-year-select" 
                onFocus={(e) => this.handleEnableingDateOfProducitonOnFocus(e.target.value)}
                onBlur={(e) => this.handleEnableingDateOfProducitonOnBlur(e.target.value)}
        >
        <option value=""></option>
        <option value="2019">2020</option>
        <option value="2019">2019</option>
        </select>
        <span>/</span>
        <select className="warehouse-month-select" 
            disabled={this.state.activeForm.dateOfProd ? undefined : "disabled"}
            onFocus={(e) => this.handleEnableingDateOfProducitonOnFocus(e.target.value)}
            onBlur={(e) => this.handleEnableingDateOfProducitonOnBlur(e.target.value)}           
        >
        <option value=""></option>
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

        <label htmlFor="">Brand and car:</label><br></br>
        <select className="warehouse-brand-select"
        disabled={this.state.activeForm.brandCarSElect ? undefined : "disabled"} 
        onFocus={(e) => this.handleEnableingCarOnFocus(e.target.value)}
        onBlur={(e) => this.handleEnableingCarOnBlur(e.target.value)}
        onChange={(e) => this.props.brandSelector(e.target.value)}
                                                           
        >
        {this.handleBrandSelectorOptions().map((brand, index) =>
            <option key={index} value={brand}>{brand}</option>   
                )}            
        </select> 

        <select className="warehouse-car-select" 
        disabled={this.state.activeForm.brandCarSElect ? undefined : "disabled"}
        onFocus={(e) => this.handleEnableingCarOnFocus(e.target.value)}
        onBlur={(e) => this.handleEnableingCarOnBlur(e.target.value)}
        >
        {this.handleCarSelectorOptions().map((car, index) =>
            <option key={index} value={car}>{car}</option>
        )}    
            
        </select>       

        <button type="submit">Search item</button> 
        <button type="submit">Add item</button> 
        <button type="submit">Remove item</button>
     </form>
     {/* <SelectedItems /> */}
  
  </div>
  


  </>
  );
  }
}
 
export default Warehouse;