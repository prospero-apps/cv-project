import React, { Component } from 'react';
import '../styles.css';
import DataInputSimple from './DataInputSimple';

class ExperiencePanel extends Component { 
  handleChange = (field, list, item, value) => {
    item[field] = value;
    this.props.handleChange(list, list);
  }  

  render() {
    const experiences = this.props.experiences;
    const currentId = this.props.currentId;
    const currentItem = experiences.filter((listItem) => listItem.id === currentId)[0];
    
    return (
      <div id="experience-panel">          
        <DataInputSimple labelText='Position' content={currentItem.position} handleChange={(val) => this.handleChange('position', experiences, currentItem, val)}/>
        <DataInputSimple labelText='Company' content={currentItem.company} handleChange={(val) => this.handleChange('company', experiences, currentItem, val)}/>
        <DataInputSimple labelText='City' content={currentItem.city} handleChange={(val) => this.handleChange('city', experiences, currentItem, val)}/>
        <DataInputSimple labelText='From' content={currentItem.from} handleChange={(val) => this.handleChange('from', experiences, currentItem, val)}/>
        <DataInputSimple labelText='To' content={currentItem.to} handleChange={(val) => this.handleChange('to', experiences, currentItem, val)}/>
        <button className='minus-button'>-</button>
      </div> 
    );
  }
}

export default ExperiencePanel;
