import React from 'react';
import '../styles.css';

const DataInputSimple = (props) => {
  const handleChange = (e) => {
    props.handleChange(e.target.value);
  }

  const labelText = props.labelText;
  const content = props.content;
  
  return (
    <label className="data-input-simple">
      {labelText}
      <input 
        type="text" 
        className='simple-input' 
        value={content}
        onChange={handleChange}
      />
    </label>
  );
}

export default DataInputSimple;
