import React, { Component } from "react";
import Event from "./Event";

class Hour extends Component {
  render() {
    return (
      <div key={this.props.events.id} className="hour">
        <Event
          handleEventDelete={this.props.handleEventDelete}
          events={this.props.events}
        />
      </div>
    );
  }
}

export default Hour;
