import React, { Component } from "react";
import Header from "./header/Header";
import Navigation from "./navigation/Navigation";
import Main from "./mainPart/main";
import { getStartOfWeek } from "./functions";
import ModalWindow from "./ModalWindow";
import { createEvent } from "./server/Gateway";
import { fetchEventsList } from "./server/Gateway";
import { deleteEvent } from "./server/Gateway";

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
  };

  prevWeek = () => {
    const curMonday = this.state.monday;
    const futureMonday = new Date(curMonday.setDate(curMonday.getDate() - 7));

    this.setState({
      monday: futureMonday,
    });
  };

  onToday = () => {
    this.setState({
      monday: getStartOfWeek(new Date()),
    });
  };

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

    switch (getStartOfWeek(this.props.monday).getMonth()) {
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

  handleEvent = () => {
    this.setState({
      createNewEvent: !this.state.createNewEvent,
    });
  };

  componentDidMount() {
    this.onToday();
    this.fetchEvents();
  }

  fetchEvents = () => {
    fetchEventsList().then((eventsList) => {
      this.setState({
        events: eventsList,
      });
    });
  };

  createNewEvent = async (newEventData) => {
    const newCalendar = await createEvent(newEventData);
    this.fetchEvents();

    console.log("newCalendar:= ", newCalendar);
  };

  handleEventDelete = (id) => {
    deleteEvent(id).then(() => this.fetchEvents());
  };

  render() {
    console.log(getStartOfWeek(this.state.monday).getFullYear());
    let month = getStartOfWeek(this.state.monday).getMonth();
    let year = getStartOfWeek(this.state.monday).getFullYear();
    let creatingEvent;
    if (this.state.createNewEvent) {
      creatingEvent = (
        <ModalWindow
          pushObjEvent={this.createNewEvent}
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
            month={month}
            year={year}
          />
          <Navigation monday={this.state.monday} />
        </div>
        {creatingEvent}
        <Main
          handleEventDelete={this.handleEventDelete}
          events={this.state.events}
          monday={this.state.monday}
        />
      </>
    );
  }
}

export default App;
