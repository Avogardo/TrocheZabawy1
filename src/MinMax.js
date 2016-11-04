import React, { Component } from 'react';

class  MinMax extends Component {

    minMax(props) {
      var minmaxarr = [Math.min.apply(null, this.props.someNumbers), Math.max.apply(null, this.props.someNumbers)];
      return minmaxarr.join(",");
    }

    render () {
      return(      
        <p>{this.minMax()}</p>
      )
    }
};

export default MinMax;