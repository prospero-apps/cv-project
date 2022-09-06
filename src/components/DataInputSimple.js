import React, { Component } from 'react';
import '../styles.css';

class DataInputSimple extends Component {
  handleChange = (e) => {
    this.props.handleChange(e.target.value);
  }

  render() {
    const labelText = this.props.labelText;
    const content = this.props.content;
  
    return (
      <label className="data-input-simple">
        {labelText}
        <input 
          type="text" 
          className='simple-input' 
          value={content}
          onChange={this.handleChange}
        />
      </label>
    );
  }
}

export default DataInputSimple;
