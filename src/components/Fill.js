import React, { Component } from 'react';
import '../styles.css';
import GeneralPanel from './GeneralPanel';
import PersonalPanel from './PersonalPanel';
import ExperiencePanel from './ExperiencePanel';
import EducationPanel from './EducationPanel';
import PanelHeader from './PanelHeader';

class Fill extends Component {
  render() {
    return (
      <div id="fill">
        <PersonalPanel/>
        <GeneralPanel/>
        <div className='panel-header-with-button'>
          <PanelHeader title='Experience'/>
          <button className='plus-button'>+</button>
        </div>
        <ExperiencePanel/>
        <div className='panel-header-with-button'>
          <PanelHeader title='Education'/>
          <button className='plus-button'>+</button>
        </div>
        <EducationPanel/>
      </div> 
    );
  }
}

export default Fill;
