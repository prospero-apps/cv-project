import React, { Component } from 'react';
import '../styles.css';
import DataPreviewEducation from './DataPreviewEducation';
import PanelHeader from './PanelHeader';

class PreviewEducationPanel extends Component {
  render() {
    const educationUniversity = this.props.educationUniversity;
    const educationCity = this.props.educationCity;
    const educationDegree = this.props.educationDegree;
    const educationSubject = this.props.educationSubject;
    const educationFrom = this.props.educationFrom;
    const educationTo = this.props.educationTo;

    return (
      <div id="preview-education-panel">
        <PanelHeader
          title='Education'
        />
        <DataPreviewEducation
          from={educationFrom}
          to={educationTo}
          university={educationUniversity}
          city={educationCity}
          degree={educationDegree}
          subject={educationSubject}
        />
      </div> 
    );
  }
}

export default PreviewEducationPanel;
