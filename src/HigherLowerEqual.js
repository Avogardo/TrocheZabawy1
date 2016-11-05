import React, { Component } from 'react';

class  HigherLowerEqual extends Component {

  higherLowerEqual(arrey, y) {
    const arr = arrey.map(function(z, i) {
    if(z > y) {
      return <p key={i}>Liczba {z} jest wieksza {y}</p>;
    } else if(z < y) {
      return <p key={i}>Liczba {z} jest mniejsza niz {y}</p>;
    } else {
      return <p key={i}>Liczba {z} jest rowna {y}</p>;
    }});
      return arr;
  }

  render () {
    return(
      <div>{this.higherLowerEqual(this.props.someNumbers, this.props.x)}</div>
    )
  }
};

export default HigherLowerEqual;