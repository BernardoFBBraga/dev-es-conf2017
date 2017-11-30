import React, { Component } from 'react';


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
