import React, { Component } from 'react';
import dataBase from './dataBase.json';
import SelectedItem from './sales-selected.js';
import BasePrice from './sales-base-price';
import AddAction from './sales-action.js';
import ArticlesJSON from './all-articles-JSON.js';
import AllActionsJSON from './all-actions-JSON.js';
import TableAllArticles from './table-all-articles.js';


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
                         serialNumEnterMessage: ""
                        },
        
        basePrice: null, 
        action: null,
        allArticleRender: null,
        allActionRender: null,
        tableAllArticles: null
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
            resultMessages: {...prevState.resultMessages, didNotFound: "", Found: "", serialNumEnterMessage: ""}
        }));
        this.setState({basePrice: null});
        this.setState({allArticleRender: null});
        this.setState({allActionRender: null});
        this.setState({action: null});
        this.setState({tableAllArticles: null});


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
        this.setState({action: null});
        this.setState({allArticleRender: null});
        this.setState({allActionRender: null});
        this.setState({tableAllArticles: null});    

        this.setState(prevState => ({
            resultMessages: {...prevState.resultMessages, serialNumEnterMessage: ""}
         }))
        } else {
            this.setState(prevState => ({
                resultMessages: {...prevState.resultMessages, serialNumEnterMessage: "Please enter serial number..."}
             }))
        }
    }

    handleAction = () => {
        if (this.state.searchResult) {
            this.setState({action: true});
            this.setState({basePrice: null});
            this.setState({allArticleRender: null});
            this.setState({allActionRender: null});
            this.setState({tableAllArticles: null});
            this.setState(prevState => ({
                resultMessages: {...prevState.resultMessages, serialNumEnterMessage: ""}
             }))
            } else {
                this.setState(prevState => ({
                    resultMessages: {...prevState.resultMessages, serialNumEnterMessage: "Please enter serial number..."}
                 }))
            }

    }

    handleClosingFunc = () => {
        this.setState({basePrice: null});
        this.setState({action: null});
    }

    handleAllArticlesJSON = () => {
            console.log('parse' , parseFloat(dataBase[1].action.discountPercent));
        let renderArray = dataBase.map((item, index) => {
            if (item.basePrice !== "") {
              return (

            <div className="json-article" key={index}>
                <i style={{paddingLeft: 10}}>{"{"}</i>
                <p><i>{'"serialNumber" : '}</i><i>{JSON.stringify(item.serialNumber)}</i>{','}</p>
                <p><i>{'"dateOfProd": '}</i><i>{JSON.stringify(item.dateOfProd)}</i>{','}</p>
                <p><i>{'"finalPrice": '}</i><i>{JSON.stringify(parseFloat(item.basePrice) - (parseFloat(item.basePrice) * (isNaN(parseFloat(item.action.discountPercent)) ? 0 : parseFloat(item.action.discountPercent)) / 100))}</i>{','}</p>
                <p style={{paddingLeft: 10}}>{'},'}</p>
            </div>

               )      
            } 
        })
        renderArray = renderArray.filter(item => {
          if (item !== undefined) {
            return item;
          }
        });
     
       if (renderArray[0] === undefined) {
        renderArray = null;
       }
       return renderArray;
    }

    handleArticleSetState = () => {
        this.handleAllArticlesJSON();
        const render = this.handleAllArticlesJSON();
        this.setState({allArticleRender: render});
        this.setState({allActionRender: null});
        this.setState({basePrice: null});
        this.setState({action: null});
        this.setState({tableAllArticles: null});
        this.setState({searchResult: null});
    }

    handleAllActionsJSON = () => {

        let renderArray = dataBase.map((item, index) => {
            if ((item.action.startDate !== "") && (item.action.expireDate !== "") &&
             (item.action.discountPercent !== "") && (item.basePrice !== "")) {
              return (
                    <div className="json-article" key={index}>
                        <i style={{paddingLeft: 10}}>{"{"}</i>
                        <p><i>{'"startingDate" : '}</i><i>{JSON.stringify(item.action.startDate)}</i>{','}</p>
                        <p><i>{'"expireingDate": '}</i><i>{JSON.stringify(item.action.expireDate)}</i>{','}</p>
                        <p><i>{'"discount": '}</i><i>{JSON.stringify(item.action.discountPercent)}</i>{','}</p>
                        <p style={{paddingLeft: 10}}>{'},'}</p>
                    </div>
                    )      
                } 
            })
            renderArray = renderArray.filter(item => {
              if (item !== undefined) {
                return item;
              }
            });
         
           if (renderArray[0] === undefined) {
            renderArray = null;
           }
           return renderArray; 
        }

    handleAllActionSetState = () => {
        this.handleAllActionsJSON();
        const render = this.handleAllActionsJSON();
        this.setState({allActionRender: render});
        this.setState({allArticleRender: null});
        this.setState({basePrice: null});
        this.setState({action: null});
        this.setState({tableAllArticles: null});
        this.setState({searchResult: null});
    } 
    
    handleTableArticles = () => {
        let renderTable = dataBase.map((item, index) => {
            if (item.basePrice !== "") {
              return (
                <tr key={index}>
                    <td>{item.serialNumber}</td>
                    <td>{item.dateOfProd}</td>
                    <td>{item.brand}</td>
                    <td>{item.car.map(car => {return car + "  "})}</td>
                    <td>{item.basePrice}</td>
                    <td>
                    <tr><span>{'Starting date: '}</span><span>{item.action.startDate}</span></tr>
                    <tr><span>{'Expireing date: '}</span><span>{item.action.expireDate}</span></tr>
                    <tr><span>{'Discount: '}</span><span>{item.action.discountPercent}</span></tr>
                    </td>
                </tr>
            
               )      
            } 
        })
        renderTable = renderTable.filter(item => {
          if (item !== undefined) {
            return item;
          }
        });
     
       if (renderTable[0] === undefined) {
        renderTable = null;
       }
       return renderTable;
    }

    handleTableSetState = () => {
        this.handleTableArticles();
        const render = this.handleTableArticles();
        this.setState({tableAllArticles: render});
        this.setState({allActionRender: null});
        this.setState({allArticleRender: null});
        this.setState({basePrice: null});
        this.setState({action: null});
        this.setState({searchResult: null});
    }

    render() { 
        console.log(this.state.tableAllArticles)
        return (  
            <div className="sales-main">
                <button className="logout-button" onClick={() => this.props.logout()}>Logout</button>
                <h1>Sales</h1><br></br>
                <h5 className="sales-ser-num-h5">{this.state.resultMessages.didNotFound}</h5>
                <div>
                <label id="first-label">Enter serial number:</label><br></br>
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
                        handleClosingFunc={this.handleClosingFunc}
                        /> : null}
                        {this.state.action ? 
                        <AddAction
                        search={this.state.search}
                        handleClosingFunc={this.handleClosingFunc}
                        /> : null}
                    
               
                    <div>
                        <h5 className="base-price-message">{this.state.resultMessages.serialNumEnterMessage}</h5>
                        <button onClick={() => this.handleBasePrice()}>Add/remove base price</button>
                        <button onClick={() => this.handleAction()}>Add/remove action</button>
                    </div>
                    <div>
                        <button onClick={() => this.handleArticleSetState()}>All articles JSON</button>
                        <button onClick={() => this.handleAllActionSetState()}>All actions JSON</button> 
                        <button onClick={() => this.handleTableSetState()}>Table of all articles</button>
                   </div> 
                        {this.state.allArticleRender ?
                        <ArticlesJSON
                        allArticleRender={this.state.allArticleRender}
                        /> : null}
                       {this.state.allActionRender ?
                       <AllActionsJSON 
                       allActionRender={this.state.allActionRender}
                        /> : null} 
                        {this.state.tableAllArticles ?
                        <TableAllArticles 
                        tableAllArticles={this.state.tableAllArticles}
                        /> : null}
            </div>
        );
    }
}
 
export default Sales;