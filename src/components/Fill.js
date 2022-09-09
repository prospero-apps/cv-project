import React from 'react';
import '../styles.css';
import GeneralPanel from './GeneralPanel';
import PersonalPanel from './PersonalPanel';
import ExperiencePanel from './ExperiencePanel';
import EducationPanel from './EducationPanel';
import PanelHeader from './PanelHeader';

const Fill = (props) => {
  const handleChange = (data, newValue) => {
    props.handleChange(data, newValue);
  }

  const handlePhoto = (src) => {
    props.handlePhoto(src);
  }

  const addExperience = () => {
    props.addExperience();
  }

  const addEducation = () => {
    props.addEducation();
  }

  const removeExperience = (currentId) => {
    props.removeExperience(currentId);
  }

  const removeEducation = (currentId) => {
    props.removeEducation(currentId);
  }

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
    <div id="fill">
      <PersonalPanel
        firstName={firstName}
        lastName={lastName}
        address={address}
        phoneNumber={phoneNumber}
        email={email}
        handleChange={(data, val) => handleChange(data, val)}
      />
      <GeneralPanel
        jobPosition={jobPosition}
        description={description}
        photo={photo}
        handleChange={(data, val) => handleChange(data, val)}
        handlePhoto={(src) => handlePhoto(src)}
      />
      <div className='panel-header-with-button'>
        <PanelHeader title='Experience'/>
        <button onClick={addExperience} className='plus-button'>+</button>
      </div>
      <ul>
        {experiences.map((experience) => {
          return (
            <li key={experience.id}>
              <ExperiencePanel
                experiences={experiences}
                currentId={experience.id}
                handleChange={(data, val) => handleChange(data, val)}
                removeExperience={(currentId) => removeExperience(currentId)}          
              />
            </li>
            )
        })}
      </ul>
      <div className='panel-header-with-button'>
        <PanelHeader title='Education'/>
        <button onClick={addEducation} className='plus-button'>+</button>
      </div>
      <ul>
        {educations.map((education) => {
          return (
            <li key={education.id}>
              <EducationPanel
                educations={educations}
                currentId={education.id}
                handleChange={(data, val) => handleChange(data, val)}
                removeEducation={(currentId) => removeEducation(currentId)}
              />
            </li>
            )
        })}
      </ul>
    </div> 
  );
}

export default Fill;
