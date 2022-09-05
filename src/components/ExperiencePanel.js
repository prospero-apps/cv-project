import React, { Component } from 'react';
import '../styles.css';
import PanelHeader from './PanelHeader';
import DataInputSimple from './DataInputSimple';

class ExperiencePanel extends Component {
  render() {
    return (
      <div id="experience-panel">        
        <DataInputSimple labelText='Position'/>
        <DataInputSimple labelText='Company'/>
        <DataInputSimple labelText='City'/>
        <DataInputSimple labelText='From'/>
        <DataInputSimple labelText='To'/>
        <button className='minus-button'>-</button>
      </div> 
    );
  }
}

export default ExperiencePanel;
