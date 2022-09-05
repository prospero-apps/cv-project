import React, { Component } from 'react';
import '../styles.css';

class DataPreviewPersonal extends Component {
  render() {
    const labelText = this.props.labelText;
    const content = this.props.content;

    return (
      <div className="data-preview-personal">
        <div className="data-preview-personal-label">{labelText}</div>
        <div className="data-preview-personal-content">{content}</div>
      </div>
    );
  }
}

export default DataPreviewPersonal;
