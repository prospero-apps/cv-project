import React, { Component } from 'react';
import '../styles.css';
import PanelHeader from './PanelHeader';

class PreviewDescriptionPanel extends Component {
  render() {
    const description = this.props.description;

    return (
      <div id="preview-description-panel">
        <PanelHeader
          title='Description'
        />
        {description}
      </div> 
    );
  }
}

export default PreviewDescriptionPanel;
