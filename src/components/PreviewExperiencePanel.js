import React, { Component } from 'react';
import '../styles.css';
import DataPreviewExperience from './DataPreviewExperience';

class PreviewExperiencePanel extends Component {
  render() {
    const experiences = this.props.experiences;
    const currentId = this.props.currentId;
    const currentItem = experiences.filter((listItem) => listItem.id === currentId)[0];

    return (
      <div id="preview-experience-panel">
        <DataPreviewExperience
          from={currentItem.from}
          to={currentItem.to}
          position={currentItem.position}
          company={currentItem.company}
          city={currentItem.city}
        />
      </div>
    );
  }
}

export default PreviewExperiencePanel;
