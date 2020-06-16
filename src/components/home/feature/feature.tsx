import React from "react";
import './feature.css'

interface FeatureProperties {
  title: string
  description: string
}

export class Feature extends React.Component<FeatureProperties, any> {
  render = () => (
    <div className="feature-container">
      <p className="feature-title">{this.props.title}</p>
      <p className="feature-description">{this.props.description}</p>
    </div>
  )
}
