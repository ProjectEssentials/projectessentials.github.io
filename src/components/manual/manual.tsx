import React from "react";

import './manual.css'

import {SmartTabs, Tab} from '@jetbrains/ring-ui/components/tabs/tabs';
import {Developer} from "./developer/developer";
import Installation from "./installation/installation";
import {Commands} from "./commands/commands";
import {Permissions} from "./permissions/permissions";
import Configuration from "./configuration/configuration";

export default class Manual extends React.Component {
  state = {selected: 'installation'};

  render = () => (
    <div className="manual-base-container">
      <div className="documentation-tabs-container">
        <SmartTabs
          className="tab-bar"
          selected={this.state.selected}
          onSelect={selected => this.setState({selected})}
        >
          <Tab id="installation" title="Installation"><Installation/></Tab>
          <Tab id="commands" title="Commands"><Commands/></Tab>
          <Tab id="permissions" title="Permissions"><Permissions/></Tab>
          <Tab id="configurations" title="Configurations"><Configuration/></Tab>
          <Tab id="developer" title="Developer API"><Developer/></Tab>
        </SmartTabs>
      </div>
    </div>
  )
}
