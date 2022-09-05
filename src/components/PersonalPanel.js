import React, { Component } from 'react';
import '../styles.css';
import PanelHeader from './PanelHeader';

class PersonalPanel extends Component {
  render() {
    return (
      <div id="personal-panel">
        <PanelHeader
          title='Personal Information'
        />
      </div> 
    );
  }
}

export default PersonalPanel;
