import React, { Component } from 'react';

class  Lacz extends Component {

    lacz(str, sep) {
        return str.join(sep);
    }

    render () {
        return(
            <p>{this.lacz(this.props.invite, this.props.separator)}</p>
        )
    }
};

export default Lacz;