import React, { Component } from 'react';
import '../styles.css';

class DataInputArea extends Component {
  render() {
    const labelText = this.props.labelText;
    return (
      <label className="data-input-area">
        {labelText}
        <textarea className='area-input' rows='4'/>
      </label>
    );
  }
}

export default DataInputArea;
