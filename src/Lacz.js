import React, { Component } from 'react';

class  Lacz extends Component {

    lacz(props) {
      return this.props.invite.join(this.props.separator);      
    }

    render () {
      return(
        <p>{this.lacz()}</p>
      )
    }
};

export default Lacz;