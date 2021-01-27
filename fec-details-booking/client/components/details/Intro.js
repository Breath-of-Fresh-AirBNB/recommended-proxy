import React from 'react';

function Intro(props) {
  return(
    <div className="intro">
      <div className="intro-left">
        <div className="intro-title title ">
          Entire house hosted by {props.hostName}
        </div>
        <div className="intro-breakdown ">
          <span>{props.roomInfo.numGuest} guests</span>
          <span className="intro-breakdown-dot"> · </span>
          <span>{props.roomInfo.numBedRooms} bedrooms</span>
          <span className="intro-breakdown-dot"> · </span>
          <span>{props.roomInfo.numBeds} beds</span>
          <span className="intro-breakdown-dot"> · </span>
          <span>{props.roomInfo.numBaths} baths</span>
        </div>
      </div>
    </div>
  )
}

export default Intro;