import React, { Component } from 'react';
import '../styles.css';

class DataPreviewExperience extends Component {
  render() {
    const from = this.props.from;
    const to = this.props.to;
    const position = this.props.position;
    const company = this.props.company;
    const city = this.props.city;

    return (
      <div className="data-preview-experience">
        <div className="data-preview-experience-from-to">{from} - {to}</div>
        <div className="data-preview-experience-position">{position}</div>
        <div className="data-preview-experience-company-city">{company}, {city}</div>
      </div>
    );
  }
}

export default DataPreviewExperience;
