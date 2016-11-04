import React, { Component } from 'react';

class  HigherLowerEqual extends Component {


    higherLowerEqual(props) {
      var y = this.props.x;
      var arr = this.props.someNumbers.map(function(z) {
        if(z > y)
        return <p>Liczba {z} jest wieksza {y}</p>;
      else if(z < y)
        return <p>Liczba {z} jest mniejsza niz {y}</p>;
      else
        return <p>Liczba {z} jest rowna {y}</p>;
      });
      return arr;
    }

    render () {
      return(      
         <p>{this.higherLowerEqual()}</p>
      )
    }
};

export default HigherLowerEqual;