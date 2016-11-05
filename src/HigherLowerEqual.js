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

    isUndefinied(x, y) {
        if (typeof y === 'undefined') {
            return <p>Nie ma podanej wartosci</p>;
        } else {
            return this.higherLowerEqual(x, y);
        }
    }

  render () {
    return(
      <div>{this.isUndefinied(this.props.someNumbers, this.props.x)}</div>
    )
  }
};

export default HigherLowerEqual;