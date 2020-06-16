import React from "react";
import './feature.css'

export class Feature extends React.Component {
  render = () => (
    <div className="feature-container">
      <p className="feature-title">{this.props.title}</p>
      <p className="feature-description">{this.props.description}</p>
    </div>
  )
}
