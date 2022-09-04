import React, { Component } from 'react';
import '../styles.css';
import Fill from './Fill';
import Preview from './Preview';

class Container extends Component {
  render() {
    return (
      <div id="main-container">
        <div id="main-header">CV Creator</div>
        <Fill/>
        <Preview/>
      </div>
    );
  }
}

export default Container;
