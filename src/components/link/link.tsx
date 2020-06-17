import React from "react";

import './link.css'

interface LinkProperties {
  href: string
  content: string
  className: string
}

export default class Link extends React.Component<LinkProperties, any> {
  render = () => (
    <a
      className={`link ${this.props.className}`}
      href={this.props.href}
    >
      {this.props.content.trim()}
    </a>
  )
}
