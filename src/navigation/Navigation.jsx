import React, { Component } from "react";
import { generateWeekRange } from "../functions";

class Navigation extends Component {


  
  

  render() {
    const week =  generateWeekRange(this.props.monday);

    return (
      <div className="week">
        <div className="day_date">
          <div className="day-header">Пн</div>
          <div className="date">{week[0]}</div>
        </div>
        {/* <div className="day_date">
          <div className="day-header">Вт</div>
          <div className="date">{aWeek[1]}</div>
        </div>
        <div className="day_date">
          <div className="day-header">Ср</div>
          <div className="date">{aWeek[2]}</div>
        </div>
        <div className="day_date">
          <div className="day-header">Чт</div>
          <div className="date">{aWeek[3]}</div>
        </div>
        <div className="day_date">
          <div className="day-header">Пт</div>
          <div className="date">{aWeek[4]}</div>
        </div>
        <div className="day_date">
          <div className="day-header">Сб</div>
          <div className="date">{aWeek[5]}</div>
        </div>
        <div className="day_date">
          <div className="day-header">Вс</div>
          <div className="date">{aWeek[6]}</div>
        </div> */}
      </div>
    );
  }
}

export default Navigation;
