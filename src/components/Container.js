import React, { useState } from 'react';
import '../styles.css';
import image from '../sample_photo.jpg';
import Fill from './Fill';
import Preview from './Preview';
import uniqid from 'uniqid';

const Container = () => {  
  const experienceItems = [
    {
      position: 'Junior Web Developer',
      company: 'WebCom Development',
      city: 'San Diego',
      from: '2001',
      to: '2004',
      id: uniqid()
    }
  ]

  const educationItems = [
    {
      university: 'State University of California',
      city: 'Sacramento',
      degree: 'Master',
      subject: 'Physics',
      from: '1995',
      to: '2000',
      id: uniqid()
    }
  ]

  const [firstName, setFirstName] = useState('Christopher');
  const [lastName, setLastName] = useState('Blaire');
  const [address, setAddress] = useState('44 Pandoo Avenue, 44788 San Porto');
  const [phoneNumber, setPhoneNumber] = useState('(65)4455-55-54');
  const [email, setEmail] = useState('christopher-blaire@gmail.com');
  const [jobPosition, setJobPosition] = useState('Senior Web Developer');
  const [description, setDescription] = useState('Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras id ligula efficitur, maximus magna vitae, porta nulla. Etiam auctor ex vitae elit facilisis ullamcorper. Sed aliquet dignissim sem. Mauris interdum a ante cursus tincidunt.');
  const [photo, setPhoto] = useState(image);
  const [experiences, setExperiences] = useState(experienceItems);
  const [educations, setEducations] = useState(educationItems);
  

  const handleChange = (data, newValue) => {
    switch (data) {
      case 'firstName':
        setFirstName(newValue);
        break;
      case 'lastName':
        setLastName(newValue);
        break;
      case 'address':
        setAddress(newValue);
        break;
      case 'phoneNumber':
        setPhoneNumber(newValue);
        break;
      case 'email':
        setEmail(newValue);
        break;
      case 'jobPosition':
        setJobPosition(newValue);
        break;
      case 'description':
        setDescription(newValue);
        break;
      case 'experiences':
        setExperiences(newValue);
        break;
      case 'educations':
        setEducations(newValue);
        break;
      default:
        break;
    }    
  }  

  const handlePhoto = (src) => {
    setPhoto(src);
  }

  const addExperience = () => {
    let experience = {
      position: '',
      company: '',
      city: '',
      from: '',
      to: '',
      id: uniqid()
    }

    setExperiences(experienceItems.concat(experience));
  }
  
  const addEducation = () => {
    let education = {
      university: '',
      city: '',
      degree: '',
      subject: '',
      from: '',
      to: '',
      id: uniqid()
    }

    setEducations(educationItems.concat(education));
  }
  
  const removeExperience = (currentId) => {
    setExperiences(experienceItems.filter(experience => experience.id !== currentId));
  }
  
  const removeEducation = (currentId) => {
    setEducations(educationItems.filter(education => education.id !== currentId));    
  }

  return (
    <div id="main-container">
      <div id="main-header">CV Creator</div>
      <Fill
        firstName={firstName}
        lastName={lastName}
        address={address}
        phoneNumber={phoneNumber}
        email={email}
        jobPosition={jobPosition}
        description={description}
        photo={photo}
        experiences={experiences}
        educations={educations}   
        handleChange={(data, val) => handleChange(data, val)}
        handlePhoto={(src) => handlePhoto(src)}
        addExperience={addExperience}
        addEducation={addEducation}
        removeExperience={(currentId) => removeExperience(currentId)}
        removeEducation={(currentId) => removeEducation(currentId)}
      />
      <Preview
        firstName={firstName}
        lastName={lastName}
        address={address}
        phoneNumber={phoneNumber}
        email={email}
        jobPosition={jobPosition}
        description={description}
        photo={photo}
        experiences={experiences}
        educations={educations}           
      />
    </div>
  );
}

export default Container;
