import React from 'react';
import '../styles.css';
import PanelHeader from './PanelHeader';

const PreviewDescriptionPanel = (props) => {
  const description = props.description;

  return (
    <div id="preview-description-panel">
      <PanelHeader
        title='Description'
      />
      {description}
    </div> 
  );
}

export default PreviewDescriptionPanel;
