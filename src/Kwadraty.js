import React, { Component } from 'react';

class Kwadraty extends Component {

  kwadraty(arr) {
    const tablicakwadratow = arr.map(this.potega);
    return tablicakwadratow.join(",");
  }

  potega(x) {
    return Math.pow(x, 2);
  }

  render () {
    return(
      <p>{this.kwadraty(this.props.in)}</p>
    )
  }
};

export default Kwadraty;