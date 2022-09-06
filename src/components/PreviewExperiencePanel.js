import React, { Component } from 'react';
import '../styles.css';
import DataPreviewExperience from './DataPreviewExperience';
import PanelHeader from './PanelHeader';

class PreviewExperiencePanel extends Component {
  render() {
    const experiencePosition = this.props.experiencePosition;
    const experienceCompany = this.props.experienceCompany;
    const experienceCity = this.props.experienceCity;
    const experienceFrom = this.props.experienceFrom;
    const experienceTo = this.props.experienceTo;

    return (
      <div id="preview-experience-panel">
        <PanelHeader
          title='Experience'
        />
        <DataPreviewExperience
          from={experienceFrom}
          to={experienceTo}
          position={experiencePosition}
          company={experienceCompany}
          city={experienceCity}
        />
      </div> 
    );
  }
}

export default PreviewExperiencePanel;
