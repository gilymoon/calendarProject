import React, { Component } from "react";
import Hour from "./Hour";
import moment from "moment";

class Day extends Component {
  state = {
    redLine: new Date(),
    displayRedLine: false,
    top: 0,
  };

  generateNums = () => {
    let arr = [];
    for (let i = 0; i < 24; i++) {
      arr[i] = i;
    }
    return arr;
  };
  getHoursWithEventsArr = (event, dayDate) => {
    const formatDate = moment(dayDate).format("YYYY-MM-DD");
    const filterEvents = event.filter(
      (eventObj) => eventObj.date === formatDate
    );
    const hoursArr = this.generateNums().map((num) => {
      if (num - 10 < 0) {
        return {
          hours: `0${num}:00`,
          events: filterEvents.filter(
            (eventObj) => eventObj.startTime.substr(0, 2) === `0${num}`
          ),
        };
      } else
        return {
          hours: `${num}:00`,
          events: filterEvents.filter(
            (eventObj) => eventObj.startTime.substr(0, 2) === num + ""
          ),
        };
    });

    return hoursArr;
  };

  componentDidMount() {
    this.displayRedLine();
    this.getSecondsToday();
    setInterval(() => {
      this.getSecondsToday();
    }, 60000);
  }

  displayRedLine = () => {
    if (
      moment(this.props.day).format("YYYY-MM-DD") ===
      moment(this.state.redLine).format("YYYY-MM-DD")
    ) {
      this.setState({
        displayRedLine: true,
      });
    }
  };

  getSecondsToday = () => {
    let now = new Date();
    let today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
    let diff = now - today;

    if (
      moment(this.props.day).format("YYYY-MM-DD") ===
      moment(this.state.redLine).format("YYYY-MM-DD")
    ) {
      this.setState({
        top: Math.round(diff / 60000 + 198),
      });
    }
  };

  render() {
    let hoursArrComplete = this.getHoursWithEventsArr(
      this.props.events,
      this.props.day
    );

    return (
      <div key={this.props.events.id} className="day">
        {this.state.displayRedLine ? (
          <div className="red-line" style={{ top: `${this.state.top}px ` }}>
            <div className="red-circle"></div>
          </div>
        ) : (
          ""
        )}
        {hoursArrComplete.map((hour) => (
          <Hour
            handleEventDelete={this.props.handleEventDelete}
            events={hour.events}
          />
        ))}
      </div>
    );
  }
}
export default Day;
