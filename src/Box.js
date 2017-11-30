import React, { Component } from 'react';
//1- Use  _.memoize do Lodash para criar uma função no constructor que vai cachear o style e retornar o mesmo objeto enquanto size não mudar

class Box extends Component {
  render() {
    if(this.props.count === 0 ) return null;
    let size = this.props.count*25
    return (
      <div
        style={this.props.style}
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
        />
      </div>
    );
  }
}

export default Box;
