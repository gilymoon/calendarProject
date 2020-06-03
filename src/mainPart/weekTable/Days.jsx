import React, { Component } from "react";
import Day from "./Day";
import { generateWeekRange } from "../../functions";
import { getStartOfWeek } from "../../functions";

class Days extends Component {
  // getEventDay = () => {
     
  //   let i = 0;
  //   while (true) {
  //     if (allWeek[i] === this.props.events.date) break;

  //     i++;
  //   }
  //   return i;
  // };

  render() {
    const firstDayOfWeek = getStartOfWeek(this.props.monday);
     const allWeek = generateWeekRange(firstDayOfWeek);
     //console.log(allWeek);
     
    return (
      <div className="days">
        <Day  day={allWeek[0]}events={this.props.events}/>
        <Day day={allWeek[1]} events={this.props.events}/>
        <Day day={allWeek[2]} events={this.props.events}/>
        <Day day={allWeek[3]} events={this.props.events}/>
        <Day day={allWeek[4]} events={this.props.events}/>
        <Day day={allWeek[5]} events={this.props.events}/>
        <Day day={allWeek[6]} events={this.props.events}/>
      </div>
    );
  }
}

export default Days;
