import React, { Component } from 'react';

class  HigherLowerEqual extends Component {


  higherLowerEqual(arrey, y) {
    var arr = arrey.map(function(z) {
    if(z > y) {
      return <p key={arrey.id}>Liczba {z} jest wieksza {y}</p>;
    } else if(z < y) {
      return <p key={arrey.id}>Liczba {z} jest mniejsza niz {y}</p>;
    } else {
      return <p key={arrey.id}>Liczba {z} jest rowna {y}</p>;
    }});
      return arr;
    }

  render (props) {
    return(
      <p>{this.higherLowerEqual(this.props.someNumbers, this.props.x)}</p>
    )
  }
};

export default HigherLowerEqual;