import React from 'react';
import '../styles.css';

const PanelHeader = (props) => {
  const title = props.title;
  return (
    <div className="panel-header">
      {title}
    </div> 
  );
}

export default PanelHeader;
