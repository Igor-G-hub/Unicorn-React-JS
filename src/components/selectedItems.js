import React, { Component } from 'react';
import dataBase from './dataBase.json';

class SelectedItems extends Component {
    state = {  }

  
    render() { 
        
        return (
            <>
            <div className="json-padding">
            <p style={{marginBottom: 10}}>{'['}</p>

                {this.props.searchResult}

                <p style={{marginTop: 10}}>{"]"}</p>  
            </div> 
            </>    
         );
    }
}
 
export default SelectedItems;