import React from 'react';
import '../styles.css';
import PreviewDescriptionPanel from './PreviewDescriptionPanel';
import PreviewEducationPanel from './PreviewEducationPanel';
import PreviewExperiencePanel from './PreviewExperiencePanel';
import PreviewHeaderPanel from './PreviewHeaderPanel';
import PreviewPersonalPanel from './PreviewPersonalPanel';
import PanelHeader from './PanelHeader';

const Preview = (props) => {
  const firstName = props.firstName;
  const lastName = props.lastName;
  const address = props.address;
  const phoneNumber = props.phoneNumber;
  const email = props.email;
  const jobPosition = props.jobPosition;
  const description = props.description;
  const photo = props.photo;
  const experiences = props.experiences;
  const educations = props.educations;

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
        <div className='panel-header'>
          <PanelHeader title='Experience'/>
        </div>
        <ul>
          {experiences.map((experience) => {
            return (
              <li key={experience.id}>
                <PreviewExperiencePanel
                  experiences={experiences}
                  currentId={experience.id}
                />
              </li>
              )
          })}
        </ul>
        <div className='panel-header'>
          <PanelHeader title='Education'/>
        </div>
        <ul>
          {educations.map((education) => {
            return (
              <li key={education.id}>
                <PreviewEducationPanel
                  educations={educations}
                  currentId={education.id}
                />
              </li>
              )
          })}
        </ul>
      </div>
    </div>
  );
}

export default Preview;
