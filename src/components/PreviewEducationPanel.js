import React, { Component } from 'react';
import '../styles.css';
import PanelHeader from './PanelHeader';

class PreviewEducationPanel extends Component {
  render() {
    return (
      <div id="preview-education-panel">
        <PanelHeader
          title='Education'
        />
      </div> 
    );
  }
}

export default PreviewEducationPanel;
