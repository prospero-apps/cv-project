import React, { Component } from 'react';
import '../styles.css';
import PanelHeader from './PanelHeader';
import DataInputArea from './DataInputArea';
import DataInputSimple from './DataInputSimple';

class GeneralPanel extends Component {
  render() {
    return (
      <div id="general-panel">
        <PanelHeader
          title='General Information'
        />
        <DataInputSimple labelText='Job Position'/>
        <DataInputArea labelText='Description'/>
        <label htmlFor="photo" className='photo-label'>
          Photo
          <input type='file' id='photo' name='photo' accept='image/*'/>
        </label>
      </div> 
    );
  }
}

export default GeneralPanel;
