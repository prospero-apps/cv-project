import React from 'react';
import '../styles.css';
import DataPreviewEducation from './DataPreviewEducation';

const PreviewEducationPanel = (props) => {
  const educations = props.educations;
  const currentId = props.currentId;
  const currentItem = educations.filter((listItem) => listItem.id === currentId)[0];

  return (
    <div id="preview-education-panel">
      <DataPreviewEducation
        from={currentItem.from}
        to={currentItem.to}
        university={currentItem.university}
        city={currentItem.city}
        degree={currentItem.degree}
        subject={currentItem.subject}
      />
    </div> 
  );
}

export default PreviewEducationPanel;
