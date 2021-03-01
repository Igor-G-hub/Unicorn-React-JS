import React, { Component } from 'react';
import dataBase from './dataBase.json';

class TableAllArticles extends Component {
    state = {  }
    render() { 
        console.log(this.props.tableAllArticles);
        return (  
                    
                     
                     <>
                       
                     <div className="table-container">
                     <h3 classNAme="table-h3">Number of Articles: {this.props.tableAllArticles.length}</h3>
                        <table id="table">
                            <tbody>
                            <tr>
                                <th>Serial number</th>
                                <th>Date of production</th>
                                <th>Brand</th>
                                <th>Car</th>
                                <th>Base price</th>
                                <th>Action</th>
                            </tr>
                            {this.props.tableAllArticles}
                           </tbody>
                        </table>
                    </div>
                    </>

          )
    }
}
 
export default TableAllArticles;