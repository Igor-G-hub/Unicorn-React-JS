import React, { Component } from 'react';
import dataBase from './dataBase.json';
import SelectedItem from './sales-selected.js';
import BasePrice from './sales-base-price';


class Sales extends Component {

    state = { 
        input: {
                bySerialNumber: ""
                },

        search: "",
            

        searchResult: null,
        
        resultMessages: {
                         didNotFound: "",
                         Found: "",
                         basePriceMessage: ""
                        },
        
        basePrice: null,                
     }

    handleInput = (value) => {
        this.setState(prevState => ({
            input: {...prevState.input, bySerialNumber: value}
        }));
    } 


    handleSearch = () => {

        let searchArray = dataBase.map((item, index) => {
            if (item.serialNumber == this.state.input.bySerialNumber) {
             return (       
              <div key={index}>
                <i key={index + 1} style={{paddingLeft: 10}}>{"{"}</i>
                <p key={index + 2}><i>{'"serialNumber" : '}</i><i>{JSON.stringify(item.serialNumber)}</i>{','}</p>
                <p key={index + 3}><i>{'"dateOfProd": '}</i><i>{JSON.stringify(item.dateOfProd)}</i>{','}</p>
                <p key={index + 4}><i>{'"brand": '}</i><i>{JSON.stringify(item.brand)}</i>{','}</p>
                <p key={index + 5}><i>{'"car": '}</i><i>{JSON.stringify(item.car.map(car => {return car}))}</i>{','}</p>
                <p key={index + 6}><i>{'"basePrice": '}</i><i>{JSON.stringify(item.basePrice)}</i>{','}</p>
                <p key={index + 7}><i>{'"action": {'}</i></p>
                <p key={index + 8} style={{paddingLeft: 60}}><i>{'"startDate" : '}</i><i>{JSON.stringify(item.action.startDate)}</i>{','}</p>
                <p key={index + 9} style={{paddingLeft: 60}}><i>{'"expireDate" : '}</i><i>{JSON.stringify(item.action.expireDate)}</i>{','}</p>
                <p key={index + 10} style={{paddingLeft: 60}}><i>{'"discountPercent" : '}</i><i>{JSON.stringify(item.action.discountPercent)}</i></p>
                <i key={index + 11} style={{paddingLeft: 60}}>{"}"}</i>
                <p key={index + 12} style={{paddingLeft: 10}}>{'},'}</p>
              </div>    
             )        
            } 
         })
         searchArray = searchArray.filter(item => {
           if (item !== undefined) {
             return item;
           }
         });
      
        if (searchArray[0] === undefined) {
          searchArray = null;
        }
        return searchArray;
    }
                 
    handleSetSearchState = () => {
        this.setState(prevState => ({
            resultMessages: {...prevState.resultMessages, didNotFound: "", Found: "", basePriceMessage: ""}
        }));
        this.setState({basePrice: null});

        this.handleSearch();
        const search = this.handleSearch();
        if (search) {
            this.setState({search: this.state.input.bySerialNumber})
            this.setState({searchResult: search});
            this.setState(prevState => ({
                resultMessages: {...prevState.resultMessages, didNotFound: "", Found: "Part number: " + this.state.search}
            }))
         
             } else {
             this.setState({searchResult: null});
             this.setState(prevState => ({
                 resultMessages: {...prevState.resultMessages, didNotFound: "Entered serial number does not exist..."}
        }))
      } 
    } 

    handleBasePrice = () => {
        if (this.state.searchResult) {
        this.setState({basePrice: true});
        this.setState(prevState => ({
            resultMessages: {...prevState.resultMessages, basePriceMessage: ""}
         }))
        } else {
            this.setState(prevState => ({
                resultMessages: {...prevState.resultMessages, basePriceMessage: "Please enter serial number..."}
             }))
        }
    }









    render() { 
        return (  
            <div className="sales-main">
                <h1>Sales</h1><br></br>
                <label className="first-label">Enter serial number:</label><br></br>
                <h5>{this.state.resultMessages.didNotFound}</h5>
                <div>
                    <input className="first-input"
                    onChange={(e) => this.handleInput(e.target.value)}
                    placeholder="enter serial number..."></input>
                    <button onClick={() => this.handleSetSearchState()} >Confirm</button>
                    </div>
                    {this.state.searchResult ?  <SelectedItem
                    searchResult={this.state.searchResult}
                    search={this.state.search} 
                    /> : null}
                    {this.state.basePrice ?
                    <BasePrice
                    search={this.state.search} 
                    searchResult={this.state.searchResult}
                    /> : null}
                    
               
                    <div>
                        <h5 className="base-price-message">{this.state.resultMessages.basePriceMessage}</h5>
                        <button onClick={() => this.handleBasePrice()}>Add/remove base price</button>
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