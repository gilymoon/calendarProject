import React, { Component } from "react";

 const defaultFormState = {
  title: "Add title of your event",
  date: "",
  startTime: "",
  endTime: "",
  description: "",
};

class ModalWindow extends Component {
  state = {
    modalEvents: defaultFormState,
  };

  
  
  createEventObj = (e) => {
    e.preventDefault();
console.log(this.state.modalEvents);

    // if (Object.values(this.state.modalEvents).some((el) => el === "")) {
    //     console.log("no values");
    //     return;
    // }

    this.props.pushObjEvent(this.state.modalEvents);
    this.props.handleEvent()
    // this.clearForm(); // try to commit
    // this.hidePopup();
};

inputHandler = (e) => {
  const { name, value } = e.target;

  this.setState({
    modalEvents: {
         ...this.state.modalEvents,
          [name]: value,
      },
  });
};
  render() {
    return (
      <form className="modalWindow" onSubmit={this.createEventObj}>
        <button className="close-btn">X</button>
        <input
          type="text"
          className="title"
          name="title"
          onChange={this.inputHandler}
        />
        <div className="times">
          <input
            type="date"
            className="date"
            name="date"
            onChange={this.inputHandler}
          />
          <input
            type="time"
            className="times"
            name="startTime"
            onChange={this.inputHandler}
          />
          <input
            type="time"
            className="times"
            name="endTime"
            onChange={this.inputHandler}
          />
        </div>
        <input
          type="text"
          className="description"
          name="description"
          onChange={this.inputHandler}
        />
        <button type="submit" className="save-btn" >
          Сохранить
        </button>
      </form>
    );
  }
}

export default ModalWindow;
