import React, { Component } from 'react';
import '../styles.css';
import GeneralPanel from './GeneralPanel';
import PersonalPanel from './PersonalPanel';
import ExperiencePanel from './ExperiencePanel';
import EducationPanel from './EducationPanel';

class Fill extends Component {
  render() {
    return (
      <div id="fill">
        <PersonalPanel/>
        <GeneralPanel/>
        <ExperiencePanel/>
        <EducationPanel/>
      </div> 
    );
  }
}

export default Fill;
