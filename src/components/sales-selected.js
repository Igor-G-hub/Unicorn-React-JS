import React, { Component } from 'react';
import dataBase from './dataBase.json';

class SelectedItem extends Component {
    state = { 
       
     }
    render() { 
        return ( 
            <>
        <p className="search-p">Part number: {this.props.search}</p>    
        <div className="json">
            {this.props.searchResult}
        </div>
          </>
         );
    }
}
 
export default SelectedItem;