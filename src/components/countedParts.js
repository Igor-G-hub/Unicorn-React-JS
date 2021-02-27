import React, { Component } from 'react';
import dataBase from './dataBase.json';

class CountedParts extends Component {
    state = { 
        counterList: null,
        objCarBrand: "",
        arrayCars: ""
     }

    testFunc = () => {
        let arrayCount =[];
        for (let i = 0; i < dataBase.length; i++) {
            for (let j = 0; j < dataBase[i].car.length;  j++) {
                arrayCount.push(dataBase[i].car[j]); 
            }
        }

        arrayCount.sort();

        const partCounts = arrayCount.reduce(function(accum, cur) {
            accum[cur] = (accum[cur] || 0) + 1;
            return accum;
          }, {});

        let reduceDupliArrayCount = arrayCount.reduce((accum, currVal) => {
            if (accum.indexOf(currVal) == -1) {
                accum.push(currVal);
            }
            return accum;
        }, [])

        let arrayCars = reduceDupliArrayCount;
        // arrayCars = JSON.parse(arrayCars);
        
        let arrayBrands = arrayCars.map(car => {
            for (let i = 0; i < dataBase.length; i++) {

                if (dataBase[i].car.indexOf(car) > -1) {
                   return dataBase[i].brand;
                }
            }
        })

        const objCarBrand = {};
        arrayCars.forEach((key, i) => objCarBrand[key] = arrayBrands[i]);
        this.setState({objCarBrand: objCarBrand});

        let counterJSON = arrayCars.map((car, index) => {
            
            // return (
            // <div key={index}>
            //     <i style={{paddingLeft: 10}}>{"{"}</i>
            //     <p><i>{'"brand_and_automobile"'}</i><i>{JSON.stringify(this.state.objCarBrand.car + " " + car)}</i>{','}</p>
            //     <p><i>{'"count": '}</i><i>{JSON.stringify(this.state.objCarBrand.car)}</i>{','}</p>
            //     <p style={{paddingLeft: 10}}>{'},'}</p>
            // </div>
            // )
        })

      
        this.setState({counterList: counterJSON});




    }



    render() { 
        return (
                <>    
                <button onClick={() => this.testFunc()}>test</button>
                {this.state.counterList}
                </>   
            


         );
    }
}
 
export default CountedParts;