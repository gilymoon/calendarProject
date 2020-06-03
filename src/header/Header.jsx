import React, { Component } from "react";

class Header extends Component {

  

  
  render() {

    return (
      <header>
      <button className="create-btn" onClick={this.props.handleEvent}>
        <i className="small material-icons">add</i>Создать
      </button>
      <button className="today-btn" onClick={this.props.onToday}>Сегодня</button>
      <button className="arrow-btn" onClick={this.props.prevWeek}>
        <i className="small material-icons" >chevron_left</i>
      </button>
      <button className="arrow-btn" onClick={this.props.nextWeek}>
        <i className="small material-icons">chevron_right</i>
      </button>
      <div className="month">Янв - Февр 2020</div>
    </header>
  );
}
};

export default Header;
