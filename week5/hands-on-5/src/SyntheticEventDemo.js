import React, { Component } from 'react';

class SyntheticEventDemo extends Component {

  handlePress = (event) => {
    alert('I was clicked');
  }

  render() {
    return (
      <div>
        <button onClick={this.handlePress}>Click Me</button>
      </div>
    );
  }
}

export default SyntheticEventDemo;