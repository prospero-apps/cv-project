import React from 'react';
import '../styles.css';
import DataInputSimple from './DataInputSimple';

const EducationPanel = (props) => {
  const handleChange = (field, list, item, value) => {
    item[field] = value;
    props.handleChange('educations', list);
  }  

  const removeEducation = () => {
    props.removeEducation(props.currentId);
  }

  const educations = props.educations;
  const currentId = props.currentId;
  const currentItem = educations.filter((listItem) => listItem.id === currentId)[0];

  return (
    <div id="education-panel">
      <DataInputSimple labelText='University' content={currentItem.university} handleChange={(val) => handleChange('university', educations, currentItem, val)}/>
      <DataInputSimple labelText='City' content={currentItem.city} handleChange={(val) => handleChange('city', educations, currentItem, val)}/>
      <DataInputSimple labelText='Degree' content={currentItem.degree} handleChange={(val) => handleChange('degree', educations, currentItem, val)}/>
      <DataInputSimple labelText='Subject' content={currentItem.subject} handleChange={(val) => handleChange('subject', educations, currentItem, val)}/>
      <DataInputSimple labelText='From' content={currentItem.from} handleChange={(val) => handleChange('from', educations, currentItem, val)}/>
      <DataInputSimple labelText='To' content={currentItem.to} handleChange={(val) => handleChange('to', educations, currentItem, val)}/>
      <button onClick={removeEducation} className='minus-button'>-</button>
    </div> 
  );
}

export default EducationPanel;
