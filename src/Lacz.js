import React, { Component } from 'react';

class  Lacz extends Component {

    lacz(props) {
      var Oinvite = this.props.invite.join(this.props.separator);
      return Oinvite;
    }

    render () {
      return(      
        <p>{this.lacz(this.props.invite, this.props.separator)}</p>
      )
    }
};

export default Lacz;