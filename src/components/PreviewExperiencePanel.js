import React, { Component } from 'react';
import '../styles.css';
import DataPreviewExperience from './DataPreviewExperience';
import PanelHeader from './PanelHeader';

class PreviewExperiencePanel extends Component {
  render() {
    return (
      <div id="preview-experience-panel">
        <PanelHeader
          title='Experience'
        />
        <DataPreviewExperience
          from='xxxx'
          to='xxxx'
          position='xxxxx'
          company='xxxxx'
          city='xxxxx'
        />
      </div> 
    );
  }
}

export default PreviewExperiencePanel;
