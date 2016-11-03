import React, { Component } from 'react';

class  Sum extends Component {

    sum(props) {
      if(this.props.in == null) {
          return <p>0</p>;
      } else if(this.props.in.every(this.checkNumberous)) {
          var sum = this.props.in.reduce(this.add, 0);    
          return sum;
      } 
      else {
          var arr;
          arr = this.props.in.map(Number);
          var sum1 = arr.reduce(this.add, 0); 
          return sum1;
      }
    }

    numberise(x) {
      return Number(x);
    }

    checkNumberous(maybe) {
     return Number.isFinite(maybe);
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