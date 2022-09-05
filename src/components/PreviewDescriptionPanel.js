import React, { Component } from 'react';
import '../styles.css';
import PanelHeader from './PanelHeader';

class PreviewDescriptionPanel extends Component {
  render() {
    return (
      <div id="preview-description-panel">
        <PanelHeader
          title='Description'
        />
      </div> 
    );
  }
}

export default PreviewDescriptionPanel;
