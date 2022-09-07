import React, { Component } from 'react';
import '../styles.css';
import image from '../sample_photo.jpg';
import Fill from './Fill';
import Preview from './Preview';
import uniqid from 'uniqid';

class Container extends Component {  
  constructor() {
    super()    
    
    const experiences = [
      {
        position: 'Junior Web Developer',
        company: 'WebCom Development',
        city: 'San Diego',
        from: '2001',
        to: '2004',
        id: uniqid()
      }
    ]

    const educations = [
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
  
    this.state = {
      firstName: 'Christopher',
      lastName: 'Blaire',
      address: '44 Pandoo Avenue, 44788 San Porto',
      phoneNumber: '(65)4455-55-54',
      email: 'christopher-blaire@gmail.com',
      jobPosition: 'Senior Web Developer',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras id ligula efficitur, maximus magna vitae, porta nulla. Etiam auctor ex vitae elit facilisis ullamcorper. Sed aliquet dignissim sem. Mauris interdum a ante cursus tincidunt. Quisque in massa placerat, dignissim erat vel, posuere dolor. Fusce sed ex ac libero ornare porttitor. Cras vulputate libero nisl, consectetur bibendum justo molestie at. Suspendisse at metus molestie, tristique nisi et, congue orci. Nunc sit amet malesuada odio. Donec lobortis velit sapien, vitae rhoncus felis egestas ut. Donec aliquet porttitor feugiat. Curabitur vestibulum luctus rutrum. Cras nec mi odio. Donec eget massa ut leo lacinia tincidunt.',
      photo: image,  
      experiences: experiences, 
      educations: educations,
    }          
  }

  handleChange = (data, newValue) => {
    this.setState({
      [data]: newValue
    });
  }  

  handlePhoto = (src) => {
    this.setState({
      photo: src
    });
  }

  addExperience = () => {
    let experience = {
      position: '',
      company: '',
      city: '',
      from: '',
      to: '',
      id: uniqid()
    }

    this.setState({
      experiences: this.state.experiences.concat(experience),
    });
  }

  addEducation = () => {
    let education = {
      university: '',
      city: '',
      degree: '',
      subject: '',
      from: '',
      to: '',
      id: uniqid()
    }

    this.setState({
      educations: this.state.educations.concat(education),
    });
  }

  render() { 
    return (
      <div id="main-container">
        <div id="main-header">CV Creator</div>
        <Fill
          firstName={this.state.firstName}
          lastName={this.state.lastName}
          address={this.state.address}
          phoneNumber={this.state.phoneNumber}
          email={this.state.email}
          jobPosition={this.state.jobPosition}
          description={this.state.description}
          photo={this.state.photo}
          experiences={this.state.experiences}
          educations={this.state.educations}                       
          onDataChange={this.handleDataChange}
          handleChange={(data, val) => this.handleChange(data, val)}
          handlePhoto={(src) => this.handlePhoto(src)}
          addExperience={this.addExperience}
          addEducation={this.addEducation}
        />
        <Preview
          firstName={this.state.firstName}
          lastName={this.state.lastName}
          address={this.state.address}
          phoneNumber={this.state.phoneNumber}
          email={this.state.email}
          jobPosition={this.state.jobPosition}
          description={this.state.description}
          photo={this.state.photo}
          experiences={this.state.experiences}
          educations={this.state.educations}           
        />
      </div>
    );
  }
}

export default Container;
