import React, { Component } from "react";
import {generateWeekRange} from '../functions'

class Navigation extends Component {
state = {
  week: generateWeekRange(this.props.monday)
}

static getDerivedStateFromProps(props, state){
  return state.week;
}


  render() {
    console.log(this.state.week);
    
    return (
      <div className="week">
        <div className="day_date">
          <div className="day-header">Пн</div>
    <div className="date">{this.state.week[0].getDate()}</div>
        </div>
        <div className="day_date">
          <div className="day-header">Вт</div>
          <div className="date">{this.state.week[1].getDate()}</div>
        </div>
        <div className="day_date">
          <div className="day-header">Ср</div>
          <div className="date">{this.state.week[2].getDate()}</div>
        </div>
        <div className="day_date">
          <div className="day-header">Чт</div>
          <div className="date">{this.state.week[3].getDate()}</div>
        </div>
        <div className="day_date">
          <div className="day-header">Пт</div>
          <div className="date">{this.state.week[4].getDate()}</div>
        </div>
        <div className="day_date">
          <div className="day-header">Сб</div>
          <div className="date">{this.state.week[5].getDate()}</div>
        </div>
        <div className="day_date">
          <div className="day-header">Вс</div>
          <div className="date">{this.state.week[6].getDate()}</div>
        </div>
      </div>
    );
  }
}

export default Navigation;
