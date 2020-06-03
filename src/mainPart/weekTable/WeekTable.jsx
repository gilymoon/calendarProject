import React, { Component } from "react";
import Days from "./Days";

class WeekTable extends Component {
  render() {
    return (
      <div className="weekTable">
        <div className="space-week"></div>
        <Days events={this.props.events} className="days" monday={this.props.monday}/>
      </div>
    );
  }
}

export default WeekTable;
