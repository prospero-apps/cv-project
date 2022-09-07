import React, { Component } from 'react';
import '../styles.css';
import DataInputSimple from './DataInputSimple';

class ExperiencePanel extends Component {  
  handleChange = (field, list, index, value) => {
    console.log(field, list, index, value)
    list[index][field] = value;
    this.props.handleChange(list, list);
  }  

  render() {
    const experiences = this.props.experiences;
    let currentIndex = experiences.length - 1;
    
    return (
      <div id="experience-panel">  
        <DataInputSimple labelText='Position' content={experiences[currentIndex].position} handleChange={(val) => this.handleChange('position', experiences, currentIndex, val)}/>
        <DataInputSimple labelText='Company' content={experiences[currentIndex].company} handleChange={(val) => this.handleChange('company', experiences, currentIndex, val)}/>
        <DataInputSimple labelText='City' content={experiences[currentIndex].city} handleChange={(val) => this.handleChange('city', experiences, currentIndex, val)}/>
        <DataInputSimple labelText='From' content={experiences[currentIndex].from} handleChange={(val) => this.handleChange('from', experiences, currentIndex, val)}/>
        <DataInputSimple labelText='To' content={experiences[currentIndex].to} handleChange={(val) => this.handleChange('to', experiences, currentIndex, val)}/>
        <button className='minus-button'>-</button>
      </div> 
    );
  }
}

export default ExperiencePanel;
