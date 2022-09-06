import React, { Component } from 'react';
import '../styles.css';
import PanelHeader from './PanelHeader';
import DataInputSimple from './DataInputSimple';

class EducationPanel extends Component {
  handleChange = (data, newValue) => {
    this.props.handleChange(data, newValue);
  }  

  render() {
    const educationUniversity = this.props.educationUniversity;
    const educationCity = this.props.educationCity;
    const educationDegree = this.props.educationDegree;
    const educationSubject = this.props.educationSubject;
    const educationFrom = this.props.educationFrom;
    const educationTo = this.props.educationTo;

    return (
      <div id="education-panel">
        <DataInputSimple labelText='University' content={educationUniversity} handleChange={(val) => this.handleChange('educationUniversity', val)}/>
        <DataInputSimple labelText='City' content={educationCity} handleChange={(val) => this.handleChange('educationCity', val)}/>
        <DataInputSimple labelText='Degree' content={educationDegree} handleChange={(val) => this.handleChange('educationDegree', val)}/>
        <DataInputSimple labelText='Subject' content={educationSubject} handleChange={(val) => this.handleChange('educationSubject', val)}/>
        <DataInputSimple labelText='From' content={educationFrom} handleChange={(val) => this.handleChange('educationFrom', val)}/>
        <DataInputSimple labelText='To' content={educationTo} handleChange={(val) => this.handleChange('educationTo', val)}/>
        <button className='minus-button'>-</button>
      </div> 
    );
  }
}

export default EducationPanel;
