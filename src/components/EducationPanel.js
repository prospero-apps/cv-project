import React, { Component } from 'react';
import '../styles.css';
import PanelHeader from './PanelHeader';
import DataInputSimple from './DataInputSimple';

class EducationPanel extends Component {
  render() {
    return (
      <div id="education-panel">
        <PanelHeader
          title='Education'
        />
        <DataInputSimple labelText='University'/>
        <DataInputSimple labelText='City'/>
        <DataInputSimple labelText='Degree'/>
        <DataInputSimple labelText='Subject'/>
        <DataInputSimple labelText='From'/>
        <DataInputSimple labelText='To'/>
        <div className="buttons">
          <button className='plus-button'>+</button>
          <button className='minus-button'>-</button>
        </div>
      </div> 
    );
  }
}

export default EducationPanel;
