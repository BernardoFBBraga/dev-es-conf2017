import React, { Component } from 'react';
import Box from './Box';

class Boxes extends Component {
  render() {
    return (
      <div style={{width:"200px", margin:"auto"}}>
        <Box
          count = {this.props.count+2}
        />
      </div>
    );
  }
}

export default Boxes;
