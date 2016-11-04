import React, { Component } from 'react';

class  Sum extends Component {

    sum(props) {
      if(this.props.in == null) {
          return <p>0</p>;
      } else if(this.props.in.every(this.checkNumberous)) {
          return this.props.in.reduce(this.add, 0);    
      } else {
          var arr;
          arr = this.props.in.map(Number);
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
      if(a != NaN) {
        return a + b;
    } else {
       return 0;
    }
    }

    render () {
      return(      
        <p>{this.sum()}</p>
      )
    }
};

export default Sum;