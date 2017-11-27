import React, { Component } from 'react';

class Clock extends Component {
  render() {
    return (
      <div>
         <h2>It is
            {String(this.props.date.getHours()).padStart(2,"00")}:
            {String(this.props.date.getMinutes()).padStart(2,"00")}:
            {String(this.props.date.getSeconds()).padStart(2,"00")}:
            {String(this.props.date.getMilliseconds()).padStart(3,"000")}.
        </h2>
      </div>
    );
  }
}

export default Clock;
