import React, { Component } from 'react';
import dataBase from './dataBase.json';

class ArticlesJSON extends Component {
    state = {  }
    render() { 
        return (
            <>  
                <div className="json">
                <h3>Number of Articles: {this.props.allArticleRender.length}</h3>
                {this.props.allArticleRender}
                </div>
            </>
          )
    }
}
 
export default ArticlesJSON;