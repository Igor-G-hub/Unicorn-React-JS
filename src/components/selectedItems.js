import React, { Component } from 'react';
import dataBase from './dataBase.json';

class SelectedItems extends Component {
    state = {  }
    render() { 
        return (
            <>
            <div className="json-rendering">
                <p style={{marginBottom: 10}}>{'['}</p>

                <p style={{paddingLeft: 10}}>{"{"}</p>
                <p><i>{'"serialNumber" : '}</i><i>{JSON.stringify(dataBase[0].serialNumber)}</i>{','}</p>
                <p><i>{'"dateOfProd": '}</i><i>{JSON.stringify(dataBase[0].dateOfProd)}</i>{','}</p>
                <p><i>{'"brand": '}</i><i>{JSON.stringify(dataBase[0].brand)}</i>{','}</p>
                <p><i>{'"car": '}</i><i>{'['}</i><i>{JSON.stringify(dataBase[0].car[0])}</i><i>{']'}</i>{','}</p>
                <p><i>{'"basePrice": '}</i><i>{JSON.stringify(dataBase[0].basePrice)}</i>{','}</p>
                <p><i>{'"action": {'}</i></p>
                <p style={{paddingLeft: 60}}><i>{'"startDate" : '}</i><i>{JSON.stringify(dataBase[0].serialNumber)}</i>{','}</p>
                <p style={{paddingLeft: 60}}><i>{'"expireDate" : '}</i><i>{JSON.stringify(dataBase[0].serialNumber)}</i>{','}</p>
                <p style={{paddingLeft: 60}}><i>{'"discountPercent" : '}</i><i>{JSON.stringify(dataBase[0].action.startDate)}</i></p>
                <p style={{paddingLeft: 60}}>{"}"}</p>
                <p style={{paddingLeft: 10}}>{'}'}</p>

                <p style={{marginTop: 10}}>{"]"}</p>

            </div> 
            </>    
         );
    }
}
 
export default SelectedItems;