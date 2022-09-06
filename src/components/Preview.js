import React, { Component } from 'react';
import '../styles.css';
import PreviewDescriptionPanel from './PreviewDescriptionPanel';
import PreviewEducationPanel from './PreviewEducationPanel';
import PreviewExperiencePanel from './PreviewExperiencePanel';
import PreviewHeaderPanel from './PreviewHeaderPanel';
import PreviewPersonalPanel from './PreviewPersonalPanel';

class Preview extends Component {
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
      <div id="preview">
        <PreviewHeaderPanel
          firstName={firstName}
          lastName={lastName}
          jobPosition={jobPosition}
        />
        <PreviewPersonalPanel          
          photo={photo}
          address={address}
          phoneNumber={phoneNumber}
          email={email}
        />
        <div id="preview-panels-container">
          <PreviewDescriptionPanel
            description={description}
          />
          <PreviewExperiencePanel
            experiencePosition={experiencePosition}
            experienceCompany={experienceCompany}
            experienceCity={experienceCity}
            experienceFrom={experienceFrom}
            experienceTo={experienceTo}
          />
          <PreviewEducationPanel
            educationUniversity={educationUniversity}
            educationCity={educationCity}
            educationDegree={educationDegree}
            educationSubject={educationSubject}
            educationFrom={educationFrom}
            educationTo={educationTo}
          />
        </div>
      </div>
    );
  }
}

export default Preview;
