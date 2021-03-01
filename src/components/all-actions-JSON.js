import React, { Component } from 'react';

class AllActionsJSON extends Component {
    state = {  }
    render() { 
        return ( 
            <>
               <div className="json">
                <h3>Number of Actions: {this.props.allActionRender.length}</h3>
                {this.props.allActionRender}
                </div> 
            </>

         );
    }
}
 
export default AllActionsJSON;