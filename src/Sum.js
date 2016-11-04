import React, { Component } from 'react';

class  Sum extends Component {

  sum(inHere) {
    if(inHere == null) {
      return <p>0</p>;
    } else if(inHere.every(this.checkNumberous)) {
        return inHere.reduce(this.add, 0);
    } else {
        var arr;
        arr = inHere.map(Number);
        if(arr.every(isNaN)) {
          return <p>0</p>;
        } else {
          var t = this.filterNaN(arr);
          return  t.reduce(this.add, 0);
        }
    }
  }

  filterNaN(arr) {
    var filteredArr = arr.filter(Boolean);
    return filteredArr;
  }

  numberise(x) {
    return Number(x);
  }

  checkNumberous(maybe) {
    return Number.isFinite(maybe);
  }

  add(a, b) {
    if(a !== NaN) {
      return a + b;
    } else {
      return 0;
    }
  }

  render (props) {
    return(
      <p>{this.sum(this.props.in)}</p>
    )
  }
};

export default Sum;