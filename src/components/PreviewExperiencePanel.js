import React, { Component } from 'react';
import '../styles.css';
import PanelHeader from './PanelHeader';

class PreviewExperiencePanel extends Component {
  render() {
    return (
      <div id="preview-experience-panel">
        <PanelHeader
          title='Experience'
        />
      </div> 
    );
  }
}

export default PreviewExperiencePanel;
