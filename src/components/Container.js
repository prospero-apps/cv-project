import React, { Component } from 'react';
import '../styles.css';
import image from '../sample_photo.jpg';
import Fill from './Fill';
import Preview from './Preview';

class Container extends Component {
  constructor() {
    super()
    this.state = {
      firstName: 'aaa',
      lastName: 'bbb',
      address: 'ccc',
      phoneNumber: 'ddd',
      email: 'eee',
      jobPosition: 'fff',
      description: 'ggg',
      photo: image,
      experiencePosition: 'iii',
      experienceCompany: 'jjj',
      experienceCity: 'kkk',
      experienceFrom: 'lll',
      experienceTo: 'mmm',
      educationUniversity: 'nnn',
      educationCity: 'ooo',
      educationDegree: 'ppp',
      educationSubject: 'qqq',
      educationFrom: 'rrr',
      educationTo: 'sss'
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
          experiencePosition={this.state.experiencePosition}
          experienceCompany={this.state.experienceCompany}
          experienceCity={this.state.experienceCity}
          experienceFrom={this.state.experienceFrom}
          experienceTo={this.state.experienceTo}
          educationUniversity={this.state.educationUniversity}
          educationCity={this.state.educationCity}
          educationDegree={this.state.educationDegree}
          educationSubject={this.state.educationSubject}
          educationFrom={this.state.educationFrom}
          educationTo={this.state.educationTo}
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
          experiencePosition={this.state.experiencePosition}
          experienceCompany={this.state.experienceCompany}
          experienceCity={this.state.experienceCity}
          experienceFrom={this.state.experienceFrom}
          experienceTo={this.state.experienceTo}
          educationUniversity={this.state.educationUniversity}
          educationCity={this.state.educationCity}
          educationDegree={this.state.educationDegree}
          educationSubject={this.state.educationSubject}
          educationFrom={this.state.educationFrom}
          educationTo={this.state.educationTo}
        />
      </div>
    );
  }
}

export default Container;
