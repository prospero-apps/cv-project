import React from 'react';
import '../styles.css';

const DataInputArea = (props) => {
  const handleChange = (e) => {
    props.handleChange(e.target.value);
  }

  const labelText = props.labelText;
  const content = props.content;

  return (
    <label className="data-input-area">
      {labelText}
      <textarea 
        className='area-input' 
        rows='4' 
        value={content}
        onChange={handleChange}
      />
    </label>
  );
}

export default DataInputArea;
