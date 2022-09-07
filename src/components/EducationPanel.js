import React, { Component } from 'react';
import '../styles.css';
import DataInputSimple from './DataInputSimple';

class EducationPanel extends Component {
  handleChange = (field, list, item, value) => {
    item[field] = value;
    this.props.handleChange(list, list);
  }  

  render() {
    const educations = this.props.educations;
    const currentId = this.props.currentId;
    const currentItem = educations.filter((listItem) => listItem.id === currentId)[0];

    return (
      <div id="education-panel">
        <DataInputSimple labelText='University' content={currentItem.university} handleChange={(val) => this.handleChange('university', educations, currentItem, val)}/>
        <DataInputSimple labelText='City' content={currentItem.city} handleChange={(val) => this.handleChange('city', educations, currentItem, val)}/>
        <DataInputSimple labelText='Degree' content={currentItem.degree} handleChange={(val) => this.handleChange('degree', educations, currentItem, val)}/>
        <DataInputSimple labelText='Subject' content={currentItem.subject} handleChange={(val) => this.handleChange('subject', educations, currentItem, val)}/>
        <DataInputSimple labelText='From' content={currentItem.from} handleChange={(val) => this.handleChange('from', educations, currentItem, val)}/>
        <DataInputSimple labelText='To' content={currentItem.to} handleChange={(val) => this.handleChange('to', educations, currentItem, val)}/>
        <button className='minus-button'>-</button>
      </div> 
    );
  }
}

export default EducationPanel;
