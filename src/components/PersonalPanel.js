import React, { Component } from 'react';
import '../styles.css';
import DataInputArea from './DataInputArea';
import DataInputSimple from './DataInputSimple';
import PanelHeader from './PanelHeader';

class PersonalPanel extends Component {
  handleChange = (data, newValue) => {
    this.props.handleChange(data, newValue);
  }  

  render() {
    const firstName = this.props.firstName;
    const lastName = this.props.lastName;
    const address = this.props.address;
    const phoneNumber = this.props.phoneNumber;
    const email = this.props.email;

    return (
      <div id="personal-panel">
        <PanelHeader
          title='Personal Information'
        />
        <DataInputSimple labelText='First Name' content={firstName} handleChange={(val) => this.handleChange('firstName', val)}/>
        <DataInputSimple labelText='Last Name' content={lastName} handleChange={(val) => this.handleChange('lastName', val)}/>
        <DataInputArea labelText='Address' content={address} handleChange={(val) => this.handleChange('address', val)}/>
        <DataInputSimple labelText='Phone Number' content={phoneNumber} handleChange={(val) => this.handleChange('phoneNumber', val)}/>
        <DataInputSimple labelText='Email' content={email} handleChange={(val) => this.handleChange('email', val)}/>
      </div> 
    );
  }
}

export default PersonalPanel;
