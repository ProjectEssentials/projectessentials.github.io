import React from "react"
import ReactDOM from 'react-dom'
import * as serviceWorker from './serviceWorker'
import App from './app'
import Home from "./components/home/home"
import Download from "./components/download/download"
import Manual from "./components/manual/manual";
import {pushStateLocationPlugin} from "@uirouter/react"

export const states = [
  {name: 'base', url: '/', component: Home},
  {name: 'download', url: '/download', component: Download},
  {name: 'manual', url: '/manual', component: Manual}
]

export const plugins = [pushStateLocationPlugin]

ReactDOM.render(
  <React.StrictMode><App/></React.StrictMode>,
  document.getElementById('root')
)

serviceWorker.unregister()
