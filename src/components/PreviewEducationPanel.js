import React, { Component } from 'react';
import '../styles.css';
import DataPreviewEducation from './DataPreviewEducation';

class PreviewEducationPanel extends Component {
  render() {
    const educations = this.props.educations;
    const currentId = this.props.currentId;
    const currentItem = educations.filter((listItem) => listItem.id === currentId)[0];

    return (
      <div id="preview-education-panel">
        <DataPreviewEducation
          from={currentItem.from}
          to={currentItem.to}
          university={currentItem.university}
          city={currentItem.city}
          degree={currentItem.degree}
          subject={currentItem.subject}
        />
      </div> 
    );
  }
}

export default PreviewEducationPanel;
