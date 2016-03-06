import React  from 'react'
import PropTypes from 'prop-types'

export default class SVGComponent extends React.Component {
  static propTypes = {
    children: PropTypes.any
  };

  render () {
    return <svg {...this.props}>{this.props.children}</svg>
  }
}
