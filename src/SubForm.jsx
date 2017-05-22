import React, { Component } from 'react';

class SubForm extends Component {
  render() {
    if (!this.props.isHidden) {
      return (
        <div>I am sub form</div>
      )
    } else {
      return null;
    }
  };
}

export default SubForm;
