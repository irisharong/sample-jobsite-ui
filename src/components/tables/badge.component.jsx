// Libraries
import React, { Component } from "react";


class Badge extends Component {
  constructor(props) {
    super(props);
    this._verifyType = this._verifyType.bind(this);
    this._selectBadge = this._selectBadge.bind(this);
  }

  render() {
    return (
      <span 
        className={`custom-badge ${this._verifyType() ? 'custom-badge--active' : ''}`}
        onClick={() => this._selectBadge(this.props.label)}
      >
        {this.props.label}
      </span>
    );
  }

  _selectBadge = (value) => {
    let type = !this._verifyType() ? 'add' : 'remove';
    this.props.onClick(value, type);
  }

  _verifyType = () => {
    return this.props.checkActive.includes(this.props.label);
  }
}

export default Badge;