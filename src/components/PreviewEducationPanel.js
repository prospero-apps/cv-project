import React, { Component } from 'react';
import '../styles.css';
import DataPreviewEducation from './DataPreviewEducation';
import PanelHeader from './PanelHeader';

class PreviewEducationPanel extends Component {
  render() {
    const educations = this.props.educations;
    let currentIndex = educations.length - 1;

    return (
      <div id="preview-education-panel">
        <PanelHeader
          title='Education'
        />
        <DataPreviewEducation
          from={educations[currentIndex].from}
          to={educations[currentIndex].to}
          university={educations[currentIndex].university}
          city={educations[currentIndex].city}
          degree={educations[currentIndex].degree}
          subject={educations[currentIndex].subject}
        />
      </div> 
    );
  }
}

export default PreviewEducationPanel;
