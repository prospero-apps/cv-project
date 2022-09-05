import React, { Component } from 'react';
import '../styles.css';

class DataPreviewEducation extends Component {
  render() {
    const from = this.props.from;
    const to = this.props.to;
    const university = this.props.university;
    const city = this.props.city;
    const degree = this.props.degree;
    const subject = this.props.subject;

    return (
      <div className="data-preview-education">
        <div className="data-preview-education-from-to">{from} - {to}</div>
        <div className="data-preview-education-university-city">{university}, {city}</div>
        <div className="data-preview-education-degree-subject">{degree} of {subject}</div>
      </div>
    );
  }
}

export default DataPreviewEducation;
