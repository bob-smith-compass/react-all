import React, { Component } from 'react'
import "./Button.css"; // Tell Webpack that Button.js uses these styles


export default class Button extends Component {
  render() {
    return (
      <div className="Button">
        Button
      </div>
    )
  }
}
