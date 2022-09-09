import React from 'react';
import '../styles.css';
import DataInputArea from './DataInputArea';
import DataInputSimple from './DataInputSimple';
import PanelHeader from './PanelHeader';

const PersonalPanel = (props) => {
  const handleChange = (data, newValue) => {
    props.handleChange(data, newValue);
  }  

  const firstName = props.firstName;
  const lastName = props.lastName;
  const address = props.address;
  const phoneNumber = props.phoneNumber;
  const email = props.email;

  return (
    <div id="personal-panel">
      <PanelHeader
        title='Personal Information'
      />
      <DataInputSimple labelText='First Name' content={firstName} handleChange={(val) => handleChange('firstName', val)}/>
      <DataInputSimple labelText='Last Name' content={lastName} handleChange={(val) => handleChange('lastName', val)}/>
      <DataInputArea labelText='Address' content={address} handleChange={(val) => handleChange('address', val)}/>
      <DataInputSimple labelText='Phone Number' content={phoneNumber} handleChange={(val) => handleChange('phoneNumber', val)}/>
      <DataInputSimple labelText='Email' content={email} handleChange={(val) => handleChange('email', val)}/>
    </div> 
  );
}

export default PersonalPanel;
