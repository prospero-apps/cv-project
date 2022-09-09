import React from 'react';
import '../styles.css';
import DataPreviewPersonal from './DataPreviewPersonal';
import PanelHeader from './PanelHeader';

const PreviewPersonalPanel = (props) => {
  const photo = props.photo;
  const address = props.address;
  const phoneNumber = props.phoneNumber;
  const email = props.email;

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

export default PreviewPersonalPanel;
