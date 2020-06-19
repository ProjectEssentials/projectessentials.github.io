import React from "react";
import Badge from '@jetbrains/ring-ui/components/badge/badge';
import Button from '@jetbrains/ring-ui/components/button/button';

import EssLogo from '../../logo.svg'
import './home.css'
import {Feature} from "./feature/feature";

export default class Home extends React.Component {
  render = () => (
    <div>
      <div className="greetings-container">
        <img src={EssLogo} className="greetings-logo" alt={'Project Essentials logo.'}/>
        <div>
          <span className="greetings-title">{'Project Essentials'}</span>
          <Badge className="greetings-title-badge">{'2.x'}</Badge>
        </div>
        <p className="greetings-subtitle">{'Take Essentials to the Minecraft'}</p>
      </div>
      <div className="download-button-container">
        <Button
          className="download-button"
          href="/download"
          title="Download for Forge"
          button-primary="true"
          key={'button-primary'}
          data-test={'button-primary'}
          {...{['primary']: true}}
        >{'Download for Forge'}</Button>
      </div>
      <div className="documentation-container">
        <p className="documentation-title">
          Check out Project Essentials docs for more info and view all 59 commands and permissions.
        </p>
        <a className="documentation-link" href={"/manual"}>Read the manual {">"}</a>
      </div>
      <div className="features-caption-container">
        <p className="features-caption">{'I make forge server more powerful'}</p>
      </div>
      <div className="features-container">
        <div className="features-sub-container">
          <Feature
            title="Easy to configure"
            description="The Project Essentials configurations adhere to the json format, that's easy to configure, that's format understandable for most minecraft community."
          />
          <Feature
            title="Module system"
            description="Install only the modules you need. It will also help reduce server overload. That's also means quickly updating project parts for new minecraft versions."
          />
          <Feature
            title="Client independence"
            description="All modules are completely independent of their presence on the client. You will not experience localization problems if you configure the modules correctly."
          />
          <Feature
            title="Really essentials"
            description="The project includes many functions that are divided into different modules. The project consists of 8 modules and 2 modules which are in the process of work."
          />
          <Feature
            title="Performance"
            description="The project will not load your server even if all modules installed. Does not require a lot of RAM. Does not require a Super Duper processor."
          />
          <Feature
            title="Multi version support"
            description="Now the project works on Minecraft versions `1.14.4` and `1.15.2`. As soon as a new version of Minecraft is released, I will definitely update the project to a new version."
          />
        </div>
      </div>
    </div>
  )
}
