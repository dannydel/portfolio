import React, { Component, Fragment } from 'react';
///import './styles/default.css';
import Top from './components/top';
import About from './components/about';
import Portfolio from './components/portfolio';
import Contact from './components/contact';

class App extends Component {
  componentDidMount() {
    this.themeSwitcher(localStorage.getItem('theme'));
  }

  themeSwitchOnClick = (event) => {
    this.themeSwitcher(event);
  };

  themeSwitcher(color) {
    if (color === undefined) {
      this.setTheme('default');
    } else {
      this.setTheme(color);
    }
  }

  setTheme(themeColor) {
    const link = document.getElementById('theme-style');
    if (link === null && (themeColor === null || themeColor === '')) return;

    link.setAttribute('href', `/styles/${themeColor}.css`);
    localStorage.setItem('theme', themeColor);
  }

  render() {
    return (
      <Fragment>
        <Top themeSwitchClick={this.themeSwitchOnClick} />
        <About />
        <Portfolio />
        <Contact />
      </Fragment>
    );
  }
}

export default App;
