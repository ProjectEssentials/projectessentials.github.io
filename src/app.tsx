import React, {Component} from 'react'
import Footer from '@jetbrains/ring-ui/components/footer/footer'
import {pushStateLocationPlugin, UIRouter, UIView} from "@uirouter/react"
import Top from './components/top/top'
import Home from "./components/home/home"
import './app.css'

const states = [
  {name: 'base', url: '/', component: Home}
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
