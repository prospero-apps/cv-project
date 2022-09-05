import React, { Component } from 'react';
import '../styles.css';
import PanelHeader from './PanelHeader';
import DataInputSimple from './DataInputSimple';

class ExperiencePanel extends Component {
  render() {
    return (
      <div id="experience-panel">
        <PanelHeader
          title='Experience'
        />
        <DataInputSimple labelText='Position'/>
        <DataInputSimple labelText='Company'/>
        <DataInputSimple labelText='City'/>
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

export default ExperiencePanel;
