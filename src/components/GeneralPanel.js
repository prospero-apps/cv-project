import React, { Component } from 'react';
import '../styles.css';
import PanelHeader from './PanelHeader';

class GeneralPanel extends Component {
  render() {
    return (
      <div id="general-panel">
        <PanelHeader
          title='General Information'
        />
      </div> 
    );
  }
}

export default GeneralPanel;
