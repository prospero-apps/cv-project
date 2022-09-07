import React, { Component } from 'react';
import '../styles.css';
import DataPreviewPersonal from './DataPreviewPersonal';
import PanelHeader from './PanelHeader';

class PreviewPersonalPanel extends Component {
  render() {
    const photo = this.props.photo;
    const address = this.props.address;
    const phoneNumber = this.props.phoneNumber;
    const email = this.props.email;

    return (
      <div id="preview-personal-panel">
        <img src={photo} alt="head" className='photo'/>
        <PanelHeader
          title='Personal Information'
        />
        <DataPreviewPersonal
          labelText='Address'
          content={address}
        />
        <DataPreviewPersonal
          labelText='Phone Number'
          content={phoneNumber}
        />
        <DataPreviewPersonal
          labelText='Email'
          content={email}
        />
      </div> 
    );
  }
}

export default PreviewPersonalPanel;
