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
    const experiences = this.props.experiences;
    const educations = this.props.educations;

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
            experiences={experiences}
          />
          <PreviewEducationPanel
            educations={educations}
          />
        </div>
      </div>
    );
  }
}

export default Preview;
