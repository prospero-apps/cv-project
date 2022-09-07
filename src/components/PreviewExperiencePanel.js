import React, { Component } from 'react';
import '../styles.css';
import DataPreviewExperience from './DataPreviewExperience';
import PanelHeader from './PanelHeader';

class PreviewExperiencePanel extends Component {
  render() {
    const experiences = this.props.experiences;
    let currentIndex = experiences.length - 1;

    return (
      <div id="preview-experience-panel">
        <PanelHeader
          title='Experience'
        />
        <DataPreviewExperience
          from={experiences[currentIndex].from}
          to={experiences[currentIndex].to}
          position={experiences[currentIndex].position}
          company={experiences[currentIndex].company}
          city={experiences[currentIndex].city}
        />
      </div> 
    );
  }
}

export default PreviewExperiencePanel;
