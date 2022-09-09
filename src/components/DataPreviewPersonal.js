import React from 'react';
import '../styles.css';

const DataPreviewPersonal = (props) => {
  const labelText = props.labelText;
  const content = props.content;

  return (
    <div className="data-preview-personal">
      <div className="data-preview-personal-label">{labelText}</div>
      <div className="data-preview-personal-content">{content}</div>
    </div>
  );
}

export default DataPreviewPersonal;
