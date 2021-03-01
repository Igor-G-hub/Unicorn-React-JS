import React, { Component } from 'react';
import dataBase from './dataBase.json';

class AddAction extends Component {
    state = {

        
               startingDateDay:"",
               startingDateMonth:"",
               startingDateYear:"",
               dateOfExpireDay: "",
               dateOfExpireMonth: "",
               dateOfExpireYear: "",
               discount: "",
        

        ids: {
            idStartingDateDay: "idStartingDateDay",
            idStartingDateMonth: "idStartingDateMonth",
            idStartingDateYear: "idStartingDateYear",
            idDateOfExpireDay: "idDateOfExpireDay",
            idDateOfExpireMonth: "idDateOfExpireMonth",
            idDateOfExpireYear: "idDateOfExpireYear",
            idDiscount: "discount"
        },

        messageFillInput: "",
        messageAddedAction: "",
        messageRemoveAction: "",
        messageRemoveDidnotExist: ""

      }

    handleActionInput = (value, eventId) => {
        const ids = this.state.ids;

       if (eventId == ids.idStartingDateDay) {
           this.setState({startingDateDay: value});
       }

       if (eventId == ids.idStartingDateMonth) {
        this.setState({startingDateMonth: value});
        }

        if (eventId == ids.idStartingDateYear) {
            this.setState({startingDateYear: value});
        }

        if (eventId == ids.idDateOfExpireDay) {
            this.setState({dateOfExpireDay: value});
        }

        if (eventId == ids.idDateOfExpireMonth) {
            this.setState({dateOfExpireMonth: value});
        }

        if (eventId == ids.idDateOfExpireYear) {
            this.setState({dateOfExpireYear: value});
        }

        if (eventId == ids.idDiscount) {
            this.setState({discount: value});
        } 
    }

    handleAddAction = () => {
        this.setState({messageFillInput: ""});
        this.setState({messageAddedAction: ""});
        this.setState({messageRemoveAction: ""});
        this.setState({messageRemoveDidnotExist: ""});

        if ((this.state.startingDateDay == "") || (this.state.startingDateMonth == "") ||
        (this.state.startingDateYear == "") || (this.state.dateOfExpireDay == "") ||
        (this.state.dateOfExpireMonth == "") || (this.state.dateOfExpireYear == "") ||
        (this.state.discount == "")) {
            this.setState({messageFillInput: "Please enter all fields..."});
            return;
        }

        let index;
        for (let i = 0; i < dataBase.length; i++) {
            if(dataBase[i].serialNumber == this.props.search) {
                index = i;
               break;
            }
        }

        const partNumber = dataBase[index].serialNumber

        dataBase[index].action.startDate = this.state.startingDateYear + "-" +
             this.state.startingDateMonth + "-" + this.state.startingDateDay;

        dataBase[index].action.expireDate = this.state.dateOfExpireYear + "-" +
            this.state.dateOfExpireMonth + "-" + this.state.dateOfExpireDay;  
            
        dataBase[index].action.discountPercent = this.state.discount;

        this.setState({messageAddedAction: "Action for part " + partNumber + " has been added"});
    }

    handleRemoveAction = () => {
        let index;
        for (let i = 0; i < dataBase.length; i++) {
            if(dataBase[i].serialNumber == this.props.search) {
                index = i;
               break;
            }
        }

        if (( dataBase[index].action.startDate !== "") && ( dataBase[index].action.expireDate !== "") 
            && ( dataBase[index].action.discountPercent !== "")) {

                dataBase[index].action.startDate = "";
                dataBase[index].action.expireDate = "";
                dataBase[index].action.discountPercent = "";

               this.setState({messageRemoveAction: "Previous action has been removed"});
        } else {
            this.setState({messageRemoveDidnotExist: "This product doesn't have any action"})
        }   
        
    }


    render() { 
        return ( 

        <div className="action">
            <p>Add/remove action for part number: {this.props.search}</p>
            <h4>{this.state.messageAddedAction}</h4>
            <h4>{this.state.messageRemoveAction}</h4>
            <h4>{this.state.messageRemoveDidnotExist}</h4>
            <h5>{this.state.messageFillInput}</h5>
            <label>Starting date:</label>
            <select id={this.state.ids.idStartingDateDay} 
            onChange={(e) => this.handleActionInput(e.target.value, e.target.id)}
            >
            
                <option value=""></option>
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
                <option value="13">13</option>
                <option value="14">14</option>
                <option value="15">15</option>
                <option value="16">16</option>
                <option value="17">17</option>
                <option value="18">18</option>
                <option value="19">19</option>
                <option value="20">20</option>
                <option value="21">21</option>
                <option value="22">22</option>
                <option value="23">23</option>
                <option value="24">24</option>
                <option value="25">25</option>
                <option value="26">26</option>
                <option value="27">27</option>
                <option value="28">28</option>
                <option value="29">29</option>
                <option value="30">30</option>
                <option value="31">31</option>
            </select>    
            <select id={this.state.ids.idStartingDateMonth} 
            onChange={(e) => this.handleActionInput(e.target.value, e.target.id)}
            >
                <option value=""></option>
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
            <select id={this.state.ids.idStartingDateYear} 
            onChange={(e) => this.handleActionInput(e.target.value, e.target.id)}
            >
                <option value=""></option>
                <option value="2021">2021</option>
                <option value="2022">2022</option>
                <option value="2023">2023</option>
                <option value="2024">2024</option>
                <option value="2025">2025</option>
                <option value="2026">2026</option>
                <option value="2027">2027</option>
            </select><br></br>
            <label>Date of expire:</label>
            <select id={this.state.ids.idDateOfExpireDay} 
            onChange={(e) => this.handleActionInput(e.target.value, e.target.id)}
            >
                <option value=""></option>
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
                <option value="13">13</option>
                <option value="14">14</option>
                <option value="15">15</option>
                <option value="16">16</option>
                <option value="17">17</option>
                <option value="18">18</option>
                <option value="19">19</option>
                <option value="20">20</option>
                <option value="21">21</option>
                <option value="22">22</option>
                <option value="23">23</option>
                <option value="24">24</option>
                <option value="25">25</option>
                <option value="26">26</option>
                <option value="27">27</option>
                <option value="28">28</option>
                <option value="29">29</option>
                <option value="30">30</option>
                <option value="31">31</option>  
            </select>
            <select id={this.state.ids.idDateOfExpireMonth} 
            onChange={(e) => this.handleActionInput(e.target.value, e.target.id)}
            >
                <option value=""></option>
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
            <select id={this.state.ids.idDateOfExpireYear} 
            onChange={(e) => this.handleActionInput(e.target.value, e.target.id)}
            >
                <option value=""></option>
                <option value="2021">2021</option>
                <option value="2022">2022</option>
                <option value="2023">2023</option>
                <option value="2024">2024</option>
                <option value="2025">2025</option>
                <option value="2026">2026</option>
                <option value="2027">2027</option>
            </select><br></br>
            <label>Percentage of discount:</label>
            <input id={this.state.ids.idDiscount} type="number" 
            onChange={(e) => this.handleActionInput(e.target.value, e.target.id)}></input><br></br>
            <div className="action-buttons">
                <button onClick={() => this.handleAddAction()} >Add</button>
                <button onClick={() => this.handleRemoveAction()}>Remove action</button>
                <button onClick={() => this.props.handleClosingFunc()}>Close</button>
            </div>
        </div>

         );
    }
}
 
export default AddAction;