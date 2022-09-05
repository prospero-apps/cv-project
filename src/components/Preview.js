import React, { Component } from 'react';
import '../styles.css';
import PreviewDescriptionPanel from './PreviewDescriptionPanel';
import PreviewEducationPanel from './PreviewEducationPanel';
import PreviewExperiencePanel from './PreviewExperiencePanel';
import PreviewHeaderPanel from './PreviewHeaderPanel';
import PreviewPersonalPanel from './PreviewPersonalPanel';

class Preview extends Component {
  render() {
    return (
      <div id="preview">
        <PreviewHeaderPanel/>
        <PreviewPersonalPanel/>
        <div id="preview-panels-container">
          <PreviewDescriptionPanel/>
          <PreviewExperiencePanel/>
          <PreviewEducationPanel/>
        </div>
      </div>
    );
  }
}

export default Preview;
