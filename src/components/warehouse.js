import React, { Component } from 'react';
import dataBase from './dataBase.json';


class Warehouse extends Component {
    state = {  }

    handleBrandSelector = () => {
       let arrayBrand = [];
       
       for (let i = 0; i < dataBase.length; i++) {
           arrayBrand.push(dataBase[i].brand);
       }
       arrayBrand = arrayBrand.sort();

       for (let i = 0; i < arrayBrand.length; i++) {
             
            if((arrayBrand[i] !== null) && (arrayBrand[i] !== arrayBrand[i - 1])) {
                arrayBrand.push(arrayBrand[i]);
            }

       }
       
       console.log(arrayBrand);
   
    }        
    

    render() { 
        return (
            <>
<div className="warehouse-main">
    <button className="logout-button">Logout</button>
    <h1>Warehouse</h1>
    <form>
        <label htmlFor="serial-number">Serial number:</label><br></br>
        <input type="text" id="serial-number" placeholder="enter serial number..." /> 
        <button type="submit">Search item</button> 
        <button type="submit">Add item</button> 
        <button type="submit">Remove item</button><br></br> 

        <label htmlFor="serial-number">Date of production:</label><br></br>
        <select className="warehouse-year-select">
            <option value="2019">2020</option>
            <option value="2019">2019</option>
        </select>
        <span>/</span>
        <select className="warehouse-month-select">
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
        <select className="warehouse-brand-select">
         
            
        </select> 
        <select className="warehouse-car-select">
            
            
        </select>       

        <button onClick={this.handleBrandSelector()} type="submit">Search item</button> 
        <button type="submit">Add item</button> 
        <button type="submit">Remove item</button>

                                                    
                                


                                </form>
                    </div>
            
            </>
          );
    }
}
 
export default Warehouse;