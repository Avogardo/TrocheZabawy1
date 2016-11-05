import React, { Component } from 'react';

class  Sum extends Component {

  sum(inHere) {
    if(inHere == null) {
      return <p>0</p>;
    } else {
        const arr = inHere.map(Number);

        if(arr.every(isNaN)) {
          return <p>0</p>;
        } else {
          const t = this.filterNaN(arr);
          return  t.reduce(this.add, 0);
        }
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