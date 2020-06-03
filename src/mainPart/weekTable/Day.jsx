import React, { Component } from "react";
import Hour from "./Hour";

class Day extends Component {
  render() {
    return (
      <div className="day">
        <Hour events={this.props.events} day={this.props.day} hour={"00:00"} />
        <Hour events={this.props.events} day={this.props.day} hour={"01:00"} />
        <Hour events={this.props.events} day={this.props.day} hour={"02:00"} />
        <Hour events={this.props.events} day={this.props.day} hour={"03:00"} />
        <Hour events={this.props.events} day={this.props.day} hour={"04:00"} />
        <Hour events={this.props.events} day={this.props.day} hour={"05:00"} />
        <Hour events={this.props.events} day={this.props.day} hour={"06:00"} />
        <Hour events={this.props.events} day={this.props.day} hour={"07:00"} />
        <Hour events={this.props.events} day={this.props.day} hour={"08:00"} />
        <Hour events={this.props.events} day={this.props.day} hour={"09:00"} />
        <Hour events={this.props.events} day={this.props.day} hour={"10:00"} />
        <Hour events={this.props.events} day={this.props.day} hour={"11:00"} />
        <Hour events={this.props.events} day={this.props.day} hour={"12:00"} />
        <Hour events={this.props.events} day={this.props.day} hour={"13:00"} />
        <Hour events={this.props.events} day={this.props.day} hour={"14:00"} />
        <Hour events={this.props.events} day={this.props.day} hour={"15:00"} />
        <Hour events={this.props.events} day={this.props.day} hour={"16:00"} />
        <Hour events={this.props.events} day={this.props.day} hour={"17:00"} />
        <Hour events={this.props.events} day={this.props.day} hour={"18:00"} />
        <Hour events={this.props.events} day={this.props.day} hour={"19:00"} />
        <Hour events={this.props.events} day={this.props.day} hour={"20:00"} />
        <Hour events={this.props.events} day={this.props.day} hour={"21:00"} />
        <Hour events={this.props.events} day={this.props.day} hour={"22:00"} />
        <Hour events={this.props.events} day={this.props.day} hour={"23:00"} />
      </div>
    );
  }
}

export default Day;
