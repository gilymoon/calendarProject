import React, { Component } from "react";
import TimeScale from "./TimeScale";
import WeekTable from "./weekTable/WeekTable";

class Main extends Component {
  render() {
    return (
      <div className="main">
        <TimeScale />
        <WeekTable events={this.props.events} monday={this.props.monday}/>
      </div>
    );
  }
}

export default Main;
