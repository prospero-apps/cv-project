import React, { Component } from 'react';
import '../styles.css';
import PanelHeader from './PanelHeader';
import DataInputSimple from './DataInputSimple';

class EducationPanel extends Component {
  render() {
    return (
      <div id="education-panel">
        <DataInputSimple labelText='University'/>
        <DataInputSimple labelText='City'/>
        <DataInputSimple labelText='Degree'/>
        <DataInputSimple labelText='Subject'/>
        <DataInputSimple labelText='From'/>
        <DataInputSimple labelText='To'/>
        <button className='minus-button'>-</button>
      </div> 
    );
  }
}

export default EducationPanel;
