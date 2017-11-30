import React, { Component } from 'react';
import CircularProgress from 'material-ui/CircularProgress';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

class Loading extends Component {
  render() {
    return(
      <MuiThemeProvider>
        <CircularProgress
          className={'circular'}
          mode={'determinate'} 
          value={this.props.date.getMilliseconds()} 
          min={0} 
          max={1000} 
          size={200} 
          thickness={20}
        />
      </MuiThemeProvider>
    );
  }
}

export default Loading;
