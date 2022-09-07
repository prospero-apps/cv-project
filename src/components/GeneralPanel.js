import React, { Component } from 'react';
import '../styles.css';
import PanelHeader from './PanelHeader';
import DataInputArea from './DataInputArea';
import DataInputSimple from './DataInputSimple';

class GeneralPanel extends Component {
  handleChange = (data, newValue) => {
    this.props.handleChange(data, newValue);
  }  

  handlePhoto = (e) => {
    const photoURL = URL.createObjectURL(e.target.files[0]);
    this.props.handlePhoto(photoURL);
  }
  
  render() {
    const jobPosition = this.props.jobPosition;
    const description= this.props.description;

    return (
      <div id="general-panel">
        <PanelHeader
          title='General Information'
        />
        <DataInputSimple labelText='Job Position' content={jobPosition} handleChange={(val) => this.handleChange('jobPosition', val)}/>
        <DataInputArea labelText='Description' content={description} handleChange={(val) => this.handleChange('description', val)}/>
        <label htmlFor="photo" className='photo-label'>
          Photo
          <input 
            type='file' 
            id='photo' 
            name='photo' 
            accept='image/*'
            onChange={this.handlePhoto}
          />
        </label>
      </div> 
    );
  }
}

export default GeneralPanel;
