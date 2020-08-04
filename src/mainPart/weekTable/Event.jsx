import React, { Component } from "react";
import { deleteEvent } from "../../server/Gateway";

class Event extends Component {
  state = {
    showPopup: false,
  };

  toggleDeleteBtn = () => {
    console.log("lol");
    this.setState({
      showPopup: !this.state.showPopup,
    });
  };

  render() {
    return this.props.events.map((event) => {
      return (
        <div key={event.id} className="event" onClick={this.toggleDeleteBtn}>
          {`${event.title} 
         ${event.startTime} ${event.endTime}`}
          {this.state.showPopup ? (
            <div
              className="popup"
              onClick={() => this.props.handleEventDelete(event.id)}
            >
              delete
            </div>
          ) : (
            ""
          )}
        </div>
      );
    });
  }
}

export default Event;
