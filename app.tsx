import React, {Component} from 'react'
import {pushStateLocationPlugin, UIRouter, UIView} from "@uirouter/react"
import Top from './components/top/top'
import Home from "./components/home/home"
import Download from "./components/download/download"
import './app.css'
import Manual from "./components/manual/manual";

const states = [
  {name: 'base', url: '/', component: Home},
  {name: 'download', url: '/download', component: Download},
  {name: 'manual', url: '/manual', component: Manual}
]

const plugins = [pushStateLocationPlugin]

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
