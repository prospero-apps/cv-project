import React, { Component } from 'react';
import '../styles.css';
import DataPreviewEducation from './DataPreviewEducation';
import PanelHeader from './PanelHeader';

class PreviewEducationPanel extends Component {
  render() {
    return (
      <div id="preview-education-panel">
        <PanelHeader
          title='Education'
        />
        <DataPreviewEducation
          from='xxxx'
          to='xxxx'
          university='xxxxx'
          city='xxxxx'
          degree='xxxxx'
          subject='xxxxx'
        />
      </div> 
    );
  }
}

export default PreviewEducationPanel;
