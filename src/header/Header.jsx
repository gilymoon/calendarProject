import React, { Component } from "react";

class Header extends Component {
  setMonth = (month) => {
    const months = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sept",
      "Oct",
      "Nov",
      "Dec",
    ];
 

    switch (month) {
      case 0:
        return months[0];
      case 1:
        return months[1];
      case 2:
        return months[2];
      case 3:
        return months[3];
      case 4:
        return months[4];
      case 5:
        return months[5];
      case 6:
        return months[6];
      case 7:
        return months[7];
      case 8:
        return months[8];
      case 9:
        return months[9];
      case 10:
        return months[10];
      case 11:
        return months[11];
      default:
        break;
    }
  };

  render() {
    let month = this.setMonth(this.props.month);

    return (
      <header>
        <button className="create-btn" onClick={this.props.handleEvent}>
          <i className="small material-icons">add</i>Создать
        </button>
        <button className="today-btn" onClick={this.props.onToday}>
          Сегодня
        </button>
        <button className="arrow-btn" onClick={this.props.prevWeek}>
          <i className="small material-icons">chevron_left</i>
        </button>
        <button className="arrow-btn" onClick={this.props.nextWeek}>
          <i className="small material-icons">chevron_right</i>
        </button>
        <div className="month">
          {month} {this.props.year}
        </div>
      </header>
    );
  }
}

export default Header;
