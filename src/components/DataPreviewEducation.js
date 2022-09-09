import React from 'react';
import '../styles.css';

const DataPreviewEducation = (props) => {
  const from = props.from;
  const to = props.to;
  const university = props.university;
  const city = props.city;
  const degree = props.degree;
  const subject = props.subject;

  return (
    <div className="data-preview-education">
      <div className="data-preview-education-from-to">{from} - {to}</div>
      <div className="data-preview-education-university-city">{university}, {city}</div>
      <div className="data-preview-education-degree-subject">{degree} of {subject}</div>
    </div>
  );
}

export default DataPreviewEducation;
