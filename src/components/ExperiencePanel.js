import React, { Component } from 'react';
import '../styles.css';
import PanelHeader from './PanelHeader';
import DataInputSimple from './DataInputSimple';

class ExperiencePanel extends Component {
  handleChange = (data, newValue) => {
    this.props.handleChange(data, newValue);
  }  

  render() {
    const experiencePosition = this.props.experiencePosition;
    const experienceCompany = this.props.experienceCompany;
    const experienceCity = this.props.experienceCity;
    const experienceFrom = this.props.experienceFrom;
    const experienceTo = this.props.experienceTo;

    return (
      <div id="experience-panel">        
        <DataInputSimple labelText='Position' content={experiencePosition} handleChange={(val) => this.handleChange('experiencePosition', val)}/>
        <DataInputSimple labelText='Company' content={experienceCompany} handleChange={(val) => this.handleChange('experienceCompany', val)}/>
        <DataInputSimple labelText='City' content={experienceCity} handleChange={(val) => this.handleChange('experienceCity', val)}/>
        <DataInputSimple labelText='From' content={experienceFrom} handleChange={(val) => this.handleChange('experienceFrom', val)}/>
        <DataInputSimple labelText='To' content={experienceFrom} handleChange={(val) => this.handleChange('experienceFrom', val)}/>
        <button className='minus-button'>-</button>
      </div> 
    );
  }
}

export default ExperiencePanel;
