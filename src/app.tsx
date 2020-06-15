import React, {Component} from 'react';
import Header from '@jetbrains/ring-ui/components/header/header';
import Footer from '@jetbrains/ring-ui/components/footer/footer';
import './app.css';

export default class App extends Component {
  render = () => (
    <div>
      <Header>
        <a href="/">Home</a>
      </Header>
      <div className="app-content">
        {'App content'}
      </div>
      <Footer/>
    </div>
  )
}
