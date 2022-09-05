import React, { Component } from 'react';
import '../styles.css';

class PanelHeader extends Component {
  render() {
    const title = this.props.title;
    return (
      <div className="panel-header">
        {title}
      </div> 
    );
  }
}

export default PanelHeader;
