import React, { Component } from 'react';
import '../styles.css';
import GeneralPanel from './GeneralPanel';
import PersonalPanel from './PersonalPanel';
import ExperiencePanel from './ExperiencePanel';
import EducationPanel from './EducationPanel';
import PanelHeader from './PanelHeader';

class Fill extends Component {
  handleChange = (data, newValue) => {
    this.props.handleChange(data, newValue);
  }

  handlePhoto = (src) => {
    this.props.handlePhoto(src);
  }

  addExperience = () => {
    console.log('sss')
  }

  render() {
    const firstName = this.props.firstName;
    const lastName = this.props.lastName;
    const address = this.props.address;
    const phoneNumber = this.props.phoneNumber;
    const email = this.props.email;
    const jobPosition = this.props.jobPosition;
    const description = this.props.description;
    const photo = this.props.photo;
    const experiences = this.props.experiences;
    const educations = this.props.educations;   

    return (
      <div id="fill">
        <PersonalPanel
          firstName={firstName}
          lastName={lastName}
          address={address}
          phoneNumber={phoneNumber}
          email={email}
          handleChange={(data, val) => this.handleChange(data, val)}
        />
        <GeneralPanel
          jobPosition={jobPosition}
          description={description}
          photo={photo}
          handleChange={(data, val) => this.handleChange(data, val)}
          handlePhoto={(src) => this.handlePhoto(src)}
        />
        <div className='panel-header-with-button'>
          <PanelHeader title='Experience'/>
          <button onClick={this.addExperience} className='plus-button'>+</button>
        </div>
        <ExperiencePanel
          experiences={experiences}
          handleChange={(data, val) => this.handleChange(data, val)}
        />
        <div className='panel-header-with-button'>
          <PanelHeader title='Education'/>
          <button className='plus-button'>+</button>
        </div>
        <EducationPanel
          educations={educations}
          handleChange={(data, val) => this.handleChange(data, val)}
        />
      </div> 
    );
  }
}

export default Fill;
