import React, { Component } from 'react';
import '../styles.css';

class DataInputSimple extends Component {
  render() {
    const labelText = this.props.labelText;
    return (
      <label className="data-input-simple">
        {labelText}
        <input type="text" className='simple-input'/>
      </label>
    );
  }
}

export default DataInputSimple;
