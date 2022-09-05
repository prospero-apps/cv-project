import React, { Component } from 'react';
import '../styles.css';
import DataInputArea from './DataInputArea';
import DataInputSimple from './DataInputSimple';
import PanelHeader from './PanelHeader';

class PersonalPanel extends Component {
  render() {
    return (
      <div id="personal-panel">
        <PanelHeader
          title='Personal Information'
        />
        <DataInputSimple labelText='First Name'/>
        <DataInputSimple labelText='Last Name'/>
        <DataInputArea labelText='Address'/>
        <DataInputSimple labelText='Phone Number'/>
        <DataInputSimple labelText='Email'/>
      </div> 
    );
  }
}

export default PersonalPanel;
