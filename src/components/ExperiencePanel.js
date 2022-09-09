import React from 'react';
import '../styles.css';
import DataInputSimple from './DataInputSimple';

const ExperiencePanel = (props) => { 
  const handleChange = (field, list, item, value) => {
    item[field] = value;
    props.handleChange('experiences', list);
  }  

  const removeExperience = () => {
    props.removeExperience(props.currentId);
  }

  const experiences = props.experiences;
  const currentId = props.currentId;
  const currentItem = experiences.filter((listItem) => listItem.id === currentId)[0];
  
  return (
    <div id="experience-panel">          
      <DataInputSimple labelText='Position' content={currentItem.position} handleChange={(val) => handleChange('position', experiences, currentItem, val)}/>
      <DataInputSimple labelText='Company' content={currentItem.company} handleChange={(val) => handleChange('company', experiences, currentItem, val)}/>
      <DataInputSimple labelText='City' content={currentItem.city} handleChange={(val) => handleChange('city', experiences, currentItem, val)}/>
      <DataInputSimple labelText='From' content={currentItem.from} handleChange={(val) => handleChange('from', experiences, currentItem, val)}/>
      <DataInputSimple labelText='To' content={currentItem.to} handleChange={(val) => handleChange('to', experiences, currentItem, val)}/>
      <button onClick={removeExperience} className='minus-button'>-</button>
    </div> 
  );
}

export default ExperiencePanel;
