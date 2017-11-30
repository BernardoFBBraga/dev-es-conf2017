import React, { Component } from 'react';
//1 - experimente mudar Component para PureComponent
//2 - experimente trazer o objeto date em vez de uma string como props. Veja que o PureComponent não funciona mais por que o objeto muda a cada vez

class Avatar extends Component {
  render() {
    var t0 = performance.now()
    if(t0%1000 < 250)while(performance.now() - t0 < 50);
    return (
      <div>
        <img
          src={this.props.picture}
          alt="avatar"
        />
        <span>
          <br/>
          {this.props.date}
        </span>
      </div>
    );
  }
}

export default Avatar;
