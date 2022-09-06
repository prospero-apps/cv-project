import React, { Component } from 'react';
import '../styles.css';

class PreviewHeaderPanel extends Component {
  render() {
    const firstName = this.props.firstName;
    const lastName = this.props.lastName;
    const jobPosition = this.props.jobPosition;

    return (
      <div id="preview-header-panel">
        <div className='preview-name'>{firstName} {lastName}</div>
        <div className='preview-position'>{jobPosition}</div>
      </div> 
    );
  }
}

export default PreviewHeaderPanel;
