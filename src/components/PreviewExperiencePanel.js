import React from 'react';
import '../styles.css';
import DataPreviewExperience from './DataPreviewExperience';

const PreviewExperiencePanel = (props) => {
  const experiences = props.experiences;
  const currentId = props.currentId;
  const currentItem = experiences.filter((listItem) => listItem.id === currentId)[0];

  return (
    <div id="preview-experience-panel">
      <DataPreviewExperience
        from={currentItem.from}
        to={currentItem.to}
        position={currentItem.position}
        company={currentItem.company}
        city={currentItem.city}
      />
    </div>
  );
}

export default PreviewExperiencePanel;
