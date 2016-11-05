import React, { Component } from 'react';

class  MinMax extends Component {

  minMax(x) {
    const minmaxarr = [Math.min.apply(null, x), Math.max.apply(null, x)];
    return minmaxarr.join(",");
  }

  render () {
    return(
      <p>{this.minMax(this.props.someNumbers)}</p>
    )
  }
};

export default MinMax;