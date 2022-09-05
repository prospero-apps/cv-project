import React, { Component } from 'react';
import '../styles.css';
import DataPreviewPersonal from './DataPreviewPersonal';
import PanelHeader from './PanelHeader';

class PreviewPersonalPanel extends Component {
  render() {
    return (
      <div id="preview-personal-panel">
        <PanelHeader
          title='Personal Information'
        />
        <DataPreviewPersonal
          labelText='Address'
          content='xxx'
        />
        <DataPreviewPersonal
          labelText='Phone Number'
          content='xxx'
        />
        <DataPreviewPersonal
          labelText='Email'
          content='xxx'
        />
      </div> 
    );
  }
}

export default PreviewPersonalPanel;
