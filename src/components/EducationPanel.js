import React, { Component } from 'react';
import '../styles.css';
import PanelHeader from './PanelHeader';

class EducationPanel extends Component {
  render() {
    return (
      <div id="education-panel">
        <PanelHeader
          title='Education'
        />
      </div> 
    );
  }
}

export default EducationPanel;
