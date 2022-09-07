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
    this.props.addExperience();
  }

  addEducation = () => {
    this.props.addEducation();
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
        <ul>
          {experiences.map((experience) => {
            return (
              <li key={experience.id}>
                <ExperiencePanel
                  experiences={experiences}
                  currentId={experience.id}
                  handleChange={(data, val) => this.handleChange(data, val)}
                />
              </li>
              )
          })}
        </ul>
        <div className='panel-header-with-button'>
          <PanelHeader title='Education'/>
          <button onClick={this.addEducation} className='plus-button'>+</button>
        </div>
        <ul>
          {educations.map((education) => {
            return (
              <li key={education.id}>
                <EducationPanel
                  educations={educations}
                  currentId={education.id}
                  handleChange={(data, val) => this.handleChange(data, val)}
                />
              </li>
              )
          })}
        </ul>
      </div> 
    );
  }
}

export default Fill;
