import React, { Component } from 'react';
// import PropTypes from 'prop-types';
// import logo from './logo.svg';
import classes from './App.css';
import icons from './icons.json'
import SVGComponent from './components/SVGComponent'

class App extends Component {
  static getIcon(name) {
    return <SVGComponent viewBox='0 0 512 512' className={[classes[name], classes.clickable].join(' ')}>
      <circle cx='256' cy='256' r='192' fillOpacity='0'/>
      <path d={icons[name] || ''}/>
    </SVGComponent>
  }

  openLink(url, blank = false) {
    return () => {
      window.open(url, blank ? '_blank' : '_self')
    }
  }

  render() {
    return (
      <div className={classes.container}>
        <div className={classes.shape}>
          <SVGComponent viewBox='0 0 100 100' width='100%' height='100%'>
            <polygon points='38.5 14.7, 71.6 24.8, 71.6 36.5, 38.5 26.7' className={classes.back}/>
            <polygon points='28.4 30.8, 82.7 40.4, 82.7 52.2, 28.4 42.5' className={classes.back}/>
            <polygon points='17.3 49.5, 71.6 59.0, 71.6 70.7, 17.3 61.3' className={classes.back}/>
            <polygon points='28.4 65.0, 61.5 74.3, 61.5 85.3, 28.4 76.7' className={classes.back}/>

            <polygon points='38.5 14.7, 60 11.7, 38.5 26.7'/>
            <polygon points='28.4 30.8, 71.6 24.8, 71.6 36.5, 28.4 42.5'/>
            <polygon points='17.3 49.5, 82.7 40.4, 82.7 52.2, 17.3 61.3'/>
            <polygon points='28.4 65.0, 71.6 59.0, 71.6 70.7, 28.4 76.7'/>
            <polygon points='61.5 85.3, 40 88.3, 61.5 74.3'/>

            <text x='50' y='36.5' style={{ fontSize: 7.5 }} transform='rotate(-8, 50,36.5)'>
              Guillaume
            </text>
            <a onClick={this.openLink('https://github.com/gcoupelant', true)}>
              <svg height='10' width='10' x='21' y='49.3'>
                {App.getIcon('github')}
              </svg>
            </a>
            <a onClick={this.openLink('https://twitter.com/gcoupelant', true)}>
              <svg height='10' width='10' x='33' y='47.6'>
                {App.getIcon('twitter')}
              </svg>
            </a>
            <a onClick={this.openLink('http://stackoverflow.com/users/3314323/guillaume-coupelant', true)}>
              <svg height='10' width='10' x='45' y='45.9'>
                {App.getIcon('stackoverflow')}
              </svg>
            </a>
            <a onClick={this.openLink('https://linkedin.com/in/gcoupelant', true)}>
              <svg height='10' width='10' x='57' y='44.3'>
                {App.getIcon('linkedIn')}
              </svg>
            </a>
            <a onClick={this.openLink('mailto:guillaume@coupelant.me')}>
              <svg height='10' width='10' x='69' y='42.5'>
                {App.getIcon('email')}
              </svg>
            </a>
            <text x='50' y='70.5' style={{ fontSize: 7.5 }} transform='rotate(-8, 50,70.5)'>
              Coupelant
            </text>
          </SVGComponent>
        </div>
      </div>
    )
  }

}

export default App;
