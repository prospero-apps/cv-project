import React, { Component } from 'react';
import '../styles.css';
import PanelHeader from './PanelHeader';

class PreviewPersonalPanel extends Component {
  render() {
    return (
      <div id="preview-personal-panel">
        <PanelHeader
          title='Personal Information'
        />
      </div> 
    );
  }
}

export default PreviewPersonalPanel;
