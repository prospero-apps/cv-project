import React from 'react';
import '../styles.css';

const DataPreviewExperience = (props)  => {
  const from = props.from;
  const to = props.to;
  const position = props.position;
  const company = props.company;
  const city = props.city;

  return (
    <div className="data-preview-experience">
      <div className="data-preview-experience-from-to">{from} - {to}</div>
      <div className="data-preview-experience-position">{position}</div>
      <div className="data-preview-experience-company-city">{company}, {city}</div>
    </div>
  );
}

export default DataPreviewExperience;
