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

  render() {
    const firstName = this.props.firstName;
    const lastName = this.props.lastName;
    const address = this.props.address;
    const phoneNumber = this.props.phoneNumber;
    const email = this.props.email;
    const jobPosition = this.props.jobPosition;
    const description = this.props.description;
    const photo = this.props.photo;
    const experiencePosition = this.props.experiencePosition;
    const experienceCompany = this.props.experienceCompany;
    const experienceCity = this.props.experienceCity;
    const experienceFrom = this.props.experienceFrom;
    const experienceTo = this.props.experienceTo;
    const educationUniversity = this.props.educationUniversity;
    const educationCity = this.props.educationCity;
    const educationDegree = this.props.educationDegree;
    const educationSubject = this.props.educationSubject;;
    const educationFrom = this.props.educationFrom;
    const educationTo = this.props.educationTo;

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
          <button className='plus-button'>+</button>
        </div>
        <ExperiencePanel
          experiencePosition={experiencePosition}
          experienceCompany={experienceCompany}
          experienceCity={experienceCity}
          experienceFrom={experienceFrom}
          experienceTo={experienceTo}
          handleChange={(data, val) => this.handleChange(data, val)}
        />
        <div className='panel-header-with-button'>
          <PanelHeader title='Education'/>
          <button className='plus-button'>+</button>
        </div>
        <EducationPanel
          educationUniversity={educationUniversity}
          educationCity={educationCity}
          educationDegree={educationDegree}
          educationSubject={educationSubject}
          educationFrom={educationFrom}
          educationTo={educationTo}
          handleChange={(data, val) => this.handleChange(data, val)}
        />
      </div> 
    );
  }
}

export default Fill;
