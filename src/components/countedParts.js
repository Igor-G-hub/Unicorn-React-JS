import React, { Component } from 'react';
import dataBase from './dataBase.json';

class CountedParts extends Component {
    state = { 
     
     }

    render() { 
        return (
                <>
                <div className="json-counted">
                <h3>Counted parts</h3>
                     {this.props.counterJSON}
                </div>

               </>   
         );
    }
}
 
export default CountedParts;