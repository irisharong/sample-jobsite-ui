// Libraries
import React, { Component } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faComment, faStar } from '@fortawesome/fontawesome-free-solid';


class Card extends Component {
  render() {
    return (
        <div className="card-item d-inline-flex mx-0">
          <div className="card-col-logo">
            <div className="logo-container"></div>
          </div>
          <div className="card-col">
            <div className="d-inline-flex tag-line">
              <h1>{this.props.name}</h1>
              <h2>{this.props.time}</h2>
            </div>
            <div className="row">
              <p className="title">{this.props.title}</p>
            </div>
            <div className="row">
              <p className="description">{this.props.description}</p>
            </div>

            <div className="row">
              <span className="card-share-icons">
                <div className="icon-circle">
                  <FontAwesomeIcon className="fa" icon={faComment} />
                </div>
                <div className="icon-circle">
                  <FontAwesomeIcon className="fa" icon={faStar} />
                </div>
                <div className="icon-circle">...</div>
              </span>
            </div>
          </div>
        </div>
    );
  }
}

export default Card;
