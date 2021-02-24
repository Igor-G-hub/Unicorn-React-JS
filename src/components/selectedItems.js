import React, { Component } from 'react';
import dataBase from './dataBase.json';

class SelectedItems extends Component {
    state = {  }

  
    render() { 
        
        return (
            <>
            <div className="json-rendering">
            <i style={{marginBottom: 10}}>{'['}</i>

                {this.props.searchResult}

                {/* {dataBase.map((item, index) => {
                    if (item.brand == this.props.search.bySerialNumber) {
                     return (       
                        <>
                        <i key={index + 1} style={{paddingLeft: 10}}>{"{"}</i>
                        <p key={index + 2}><i>{'"serialNumber" : '}</i><i>{JSON.stringify(item.serialNumber)}</i>{','}</p>
                        <p key={index + 3}><i>{'"dateOfProd": '}</i><i>{JSON.stringify((new Date(item.dateOfProd)).getFullYear)}</i>{','}</p>
                        <p key={index + 4}><i>{'"brand": '}</i><i>{JSON.stringify(item.brand)}</i>{','}</p>
                        <p key={index + 5}><i>{'"car": '}</i><i>{'['}</i><i>{JSON.stringify(item.car[0])}</i><i>{']'}</i>{','}</p>
                        <p key={index + 6}><i>{'"basePrice": '}</i><i>{JSON.stringify(item.basePrice)}</i>{','}</p>
                        <p key={index + 7}><i>{'"action": {'}</i></p>
                        <p key={index + 8} style={{paddingLeft: 60}}><i>{'"startDate" : '}</i><i>{JSON.stringify(item.serialNumber)}</i>{','}</p>
                        <p key={index + 9} style={{paddingLeft: 60}}><i>{'"expireDate" : '}</i><i>{JSON.stringify(item.serialNumber)}</i>{','}</p>
                        <p key={index + 10} style={{paddingLeft: 60}}><i>{'"discountPercent" : '}</i><i>{JSON.stringify(item.action.startDate)}</i></p>
                        <i key={index + 11} style={{paddingLeft: 60}}>{"}"}</i>
                        <i key={index + 12} style={{paddingLeft: 10}}>{'},'}</i>
                        </>    
                     )        
                    }
                })} */}

                <i style={{marginTop: 10}}>{"]"}</i>  
            </div> 
            </>    
         );
    }
}
 
export default SelectedItems;