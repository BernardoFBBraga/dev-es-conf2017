import React, { Component } from 'react';
import Box from './Box';

class Boxes extends Component {
  render() {
    return (
      <div
        style={{width:"200px", margin:"auto"}}
        onClick={(e)=>console.log(e)}
      >
        <Box
          count = {this.props.count+2}
        />
      </div>
    );
  }
}

export default Boxes;
