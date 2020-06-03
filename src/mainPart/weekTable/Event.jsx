import React, { Component } from "react";

class Event extends Component {
  render() {
    console.log(this.props.events[0].title);

    return (
      <div className="event">
        {this.props.events[0].title},{this.props.events[0].startTime}-
        {this.props.events[0].finishTime}
      </div>
    );
  }
}

export default Event;
