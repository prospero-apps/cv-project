import React from 'react';
import '../styles.css';

const PreviewHeaderPanel = (props) => {
  const firstName = props.firstName;
  const lastName = props.lastName;
  const jobPosition = props.jobPosition;

  return (
    <div id="preview-header-panel">
      <div className='preview-name'>{firstName} {lastName}</div>
      <div className='preview-position'>{jobPosition}</div>
    </div> 
  );
}

export default PreviewHeaderPanel;
