import React, { Component } from 'react';
import dataBase from './dataBase.json';

class Sales extends Component {
    state = {  }
    render() { 
        return (  
            <div className="sales-main">
                <h1>Sales</h1><br></br>
                <label >Enter serial number:</label><br></br>
                <div>
                <input placeholder="enter serial number..."></input><button>Confirm</button>
                </div>
                <p className="search-p">Part number :</p>
                <div className="json">
                    <i style={{paddingLeft: 10}}>{"{"}</i>
                    <p ><i>{'"serialNumber" : '}</i><i>{JSON.stringify(dataBase[0].serialNumber)}</i>{','}</p>
                    <p><i>{'"dateOfProd": '}</i><i>{JSON.stringify(dataBase[0].dateOfProd)}</i>{','}</p>
                    <p><i>{'"brand": '}</i><i>{JSON.stringify(dataBase[0].brand)}</i>{','}</p>
                    <p><i>{'"car": '}</i><i>{JSON.stringify(dataBase[0].car.map(car => {return car}))}</i>{','}</p>
                    <p><i>{'"basePrice": '}</i><i>{JSON.stringify(dataBase[0].basePrice)}</i>{','}</p>
                    <p><i>{'"action": {'}</i></p>
                    <p style={{paddingLeft: 60}}><i>{'"startDate" : '}</i><i>{JSON.stringify(dataBase[0].action.startDate)}</i>{','}</p>
                    <p style={{paddingLeft: 60}}><i>{'"expireDate" : '}</i><i>{JSON.stringify(dataBase[0].action.expireDate)}</i>{','}</p>
                    <p style={{paddingLeft: 60}}><i>{'"discountPercent" : '}</i><i>{JSON.stringify(dataBase[0].action.discountPercent)}</i></p>
                    <i style={{paddingLeft: 50}}>{'}'}</i>
                    <p style={{paddingLeft: 10}}>{"},"}</p>
                </div>
                 <div className="">
                    <button>Add/remove base price</button>
                    <button>Add/remove action</button>
                 </div>
                 <div>
                    <button>All articles JSON</button>
                    <button>List of all articles</button> 
                 </div>  




            </div>
        );
    }
}
 
export default Sales;