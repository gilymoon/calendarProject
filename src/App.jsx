import React, { Component } from "react";
import Header from "./header/Header";
import Navigation from "./navigation/Navigation";
import Main from "./mainPart/main";
import { getStartOfWeek } from "./functions";
import ModalWindow from "./ModalWindow";
// import moment from "moment"

class App extends Component {
  state = {
    monday: getStartOfWeek(new Date()),
    events: [],
    createNewEvent: false,
  };
  nextWeek = () => {
    const curMonday = this.state.monday;
    const futureMonday = new Date(curMonday.setDate(curMonday.getDate() + 7));

    this.setState({
      monday: futureMonday,
    });
    //return this.state.monday.setDate(this.state.monday.getDate()+7);
  };

  prevWeek = () => {
    const curMonday = this.state.monday;
    const futureMonday = new Date(curMonday.setDate(curMonday.getDate() - 7));

    this.setState({
      monday: futureMonday,
    });
    // return this.state.monday.setDate(this.state.monday.getDate()-7);
  };

  onToday = () => {
    this.setState({
      monday: getStartOfWeek(new Date()),
    });
  };

  pushObjEvent = (obj) => {
    this.setState({
      events: [...this.state.events, obj],
    });
  };

  handleEvent = () => {
    this.setState({
      createNewEvent: !this.state.createNewEvent,
    });
  };

  render() {
    console.log(this.state.monday);
    let creatingEvent;
    if (this.state.createNewEvent) {
      creatingEvent = (
        <ModalWindow
          pushObjEvent={this.pushObjEvent}
          handleEvent={this.handleEvent}
        />
      );
    } else {
      creatingEvent = "";
    }
    return (
      <>
        <div className="headers">
          <Header
            nextWeek={this.nextWeek}
            prevWeek={this.prevWeek}
            onToday={this.onToday}
            handleEvent={this.handleEvent}
            events={this.state.events}
          />
          <Navigation monday={this.state.monday} />
        </div>
        {creatingEvent}
        <Main events={this.state.events} monday={this.state.monday} />
      </>
    );
  }
}

export default App;
