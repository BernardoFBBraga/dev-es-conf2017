import React, { Component } from 'react';


class Box extends Component {
  render() {
    if(this.props.count === 0 ) return null;
    let size = this.props.count*25
    return (
      <div
        style={this.props.style}
        onClick={this.props.onClick}
      >
        <Box
          count={this.props.count-1}
          style={
            {
              width:size,
              height:size,
              backgroundColor:"rgb("+size+","+(256-size)+","+size+")",
            }
          }
          onClick={
            (e)=>{
              console.log(e);
            }
          }
        />
      </div>
    );
  }
}

export default Box;
