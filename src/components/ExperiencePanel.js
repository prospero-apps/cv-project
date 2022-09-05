import React, { Component } from 'react';
import '../styles.css';
import PanelHeader from './PanelHeader';

class ExperiencePanel extends Component {
  render() {
    return (
      <div id="experience-panel">
        <PanelHeader
          title='Experience'
        />
      </div> 
    );
  }
}

export default ExperiencePanel;
