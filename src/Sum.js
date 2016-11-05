import React, { Component } from 'react';

class  Sum extends Component {

  sum(inHere) {
    const arr = inHere.map(Number);
    const t = this.filterNaN(arr);

    if(inHere === null || arr.every(isNaN)) {
      return <p>0</p>;
    } else {
        return  t.reduce(this.add, 0);
      }
  }

  filterNaN(arr) {
    const filteredArr = arr.filter(Boolean);
    return filteredArr;
  }

  add(a, b) {
      return a + b;
  }

  render () {
    return(
      <p>{this.sum(this.props.in)}</p>
    )
  }
};

export default Sum;