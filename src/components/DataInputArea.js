import React, { Component } from 'react';
import '../styles.css';

class DataInputArea extends Component {
  handleChange = (e) => {
    this.props.handleChange(e.target.value);
  }

  render() {
    const labelText = this.props.labelText;
    const content = this.props.content;

    return (
      <label className="data-input-area">
        {labelText}
        <textarea 
          className='area-input' 
          rows='4' 
          value={content}
          onChange={this.handleChange}
        />
      </label>
    );
  }
}

export default DataInputArea;
