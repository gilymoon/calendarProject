import React, { Component } from "react";
import Day from "./Day";
import { generateWeekRange } from "../../functions";
import { getStartOfWeek } from "../../functions";

class Days extends Component {
  render() {
    const firstDayOfWeek = getStartOfWeek(this.props.monday);
    const allWeek = generateWeekRange(firstDayOfWeek);

    return (
      <div className="days">
        <Day
          handleEventDelete={this.props.handleEventDelete}
          day={allWeek[0]}
          events={this.props.events}
        />
        <Day
          handleEventDelete={this.props.handleEventDelete}
          day={allWeek[1]}
          events={this.props.events}
        />
        <Day
          handleEventDelete={this.props.handleEventDelete}
          day={allWeek[2]}
          events={this.props.events}
        />
        <Day
          handleEventDelete={this.props.handleEventDelete}
          day={allWeek[3]}
          events={this.props.events}
        />
        <Day
          handleEventDelete={this.props.handleEventDelete}
          day={allWeek[4]}
          events={this.props.events}
        />
        <Day
          handleEventDelete={this.props.handleEventDelete}
          day={allWeek[5]}
          events={this.props.events}
        />
        <Day
          handleEventDelete={this.props.handleEventDelete}
          day={allWeek[6]}
          events={this.props.events}
        />
      </div>
    );
  }
}

export default Days;
