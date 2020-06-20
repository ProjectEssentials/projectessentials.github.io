import React, {Component} from 'react'
import {UIRouter, UIView} from "@uirouter/react"
import Top from './components/top/top'

import './app.css'
import {plugins, states} from "./index";

export default class App extends Component {
  render = () => (
    <div>
      <Top/>
      <UIRouter plugins={plugins} states={states}>
        <UIView/>
      </UIRouter>
    </div>
  )
}
