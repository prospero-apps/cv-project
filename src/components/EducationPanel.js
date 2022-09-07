import React, { Component } from 'react';
import '../styles.css';
import DataInputSimple from './DataInputSimple';

class EducationPanel extends Component {
  handleChange = (field, list, index, value) => {
    console.log(field, list, index, value)
    list[index][field] = value;
    this.props.handleChange(list, list);
  }  

  render() {
    const educations = this.props.educations;
    let currentIndex = educations.length - 1;

    return (
      <div id="education-panel">
        <DataInputSimple labelText='University' content={educations[currentIndex].university} handleChange={(val) => this.handleChange('university', educations, currentIndex, val)}/>
        <DataInputSimple labelText='City' content={educations[currentIndex].city} handleChange={(val) => this.handleChange('city', educations, currentIndex, val)}/>
        <DataInputSimple labelText='Degree' content={educations[currentIndex].degree} handleChange={(val) => this.handleChange('degree', educations, currentIndex, val)}/>
        <DataInputSimple labelText='Subject' content={educations[currentIndex].subject} handleChange={(val) => this.handleChange('subject', educations, currentIndex, val)}/>
        <DataInputSimple labelText='From' content={educations[currentIndex].from} handleChange={(val) => this.handleChange('from', educations, currentIndex, val)}/>
        <DataInputSimple labelText='To' content={educations[currentIndex].to} handleChange={(val) => this.handleChange('to', educations, currentIndex, val)}/>
        <button className='minus-button'>-</button>
      </div> 
    );
  }
}

export default EducationPanel;
