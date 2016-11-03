import React, { Component } from 'react';

class  HigherLowerEqual extends Component {


    higherLowerEqual(props) {
      var arr = this.props.someNumbers.map(this.checkBiggos);
      return arr;
    }

    checkBiggos(z) {
      if(z > 2)
        return <p>Liczba {z} jest wieksza niz 2</p>;
      else if(z < 1)
        return <p>Liczba {z} jest mniejsza niz 2</p>;
      else
        return <p>Liczba {z} jest rowna 2</p>;
    }


    render () {
      return(      
         <p>{this.higherLowerEqual(this.props.someNumbers)}</p>
      )
    }
};

export default HigherLowerEqual;