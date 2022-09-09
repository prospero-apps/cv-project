import React from 'react';
import '../styles.css';
import PanelHeader from './PanelHeader';
import DataInputArea from './DataInputArea';
import DataInputSimple from './DataInputSimple';

const GeneralPanel = (props) => {
  const handleChange = (data, newValue) => {
    props.handleChange(data, newValue);
  }  

  const handlePhoto = (e) => {
    const photoURL = URL.createObjectURL(e.target.files[0]);
    props.handlePhoto(photoURL);
  }
  
  const jobPosition = props.jobPosition;
  const description= props.description;

  return (
    <div id="general-panel">
      <PanelHeader
        title='General Information'
      />
      <DataInputSimple labelText='Job Position' content={jobPosition} handleChange={(val) => handleChange('jobPosition', val)}/>
      <DataInputArea labelText='Description' content={description} handleChange={(val) => handleChange('description', val)}/>
      <label htmlFor="photo" className='photo-label'>
        Photo
        <input 
          type='file' 
          id='photo' 
          name='photo' 
          accept='image/*'
          onChange={handlePhoto}
        />
      </label>
    </div> 
  );
}

export default GeneralPanel;
