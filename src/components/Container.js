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
        position: 'iii',
        company: 'jjj',
        city: 'kkk',
        from: 'lll',
        to: 'mmm',
        id: uniqid()
      }
    ]

    const educations = [
      {
        university: 'nnn',
        city: 'ooo',
        degree: 'ppp',
        subject: 'qqq',
        from: 'rrr',
        to: 'sss',
        id: uniqid()
      }
    ]
  
    this.state = {
      firstName: 'aaa',
      lastName: 'bbb',
      address: 'ccc',
      phoneNumber: 'ddd',
      email: 'eee',
      jobPosition: 'fff',
      description: 'ggg',
      photo: image,  
      experiences: experiences, 
      educations: educations,
    }          
  }

  handleChange = (data, newValue) => {
    // console.log(data, newValue);
    this.setState({
      [data]: newValue
    });
  }  

  handlePhoto = (src) => {
    this.setState({
      photo: src
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
