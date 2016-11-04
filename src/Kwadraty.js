import React, { Component } from 'react';

class Kwadraty extends Component {

  kwadraty(arr) {
    var tablicakwadratow = arr.map(this.potega);
    return tablicakwadratow.join(",");
  }

  potega(x) {
    return Math.pow(x, 2);
  }

  render (props) {
    return(
      <p>{this.kwadraty(this.props.in)}</p>
    )
  }
};

export default Kwadraty;