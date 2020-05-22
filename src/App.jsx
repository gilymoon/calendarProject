import React, { Component } from "react";
import Header from './header/Header';
import Navigation from './navigation/Navigation'
import Main from "./mainPart/main";
import {getStartOfWeek} from './functions'

class App extends Component {
  state = {
    monday: getStartOfWeek(new Date())
  }
nextWeek = () => {
  const curMonday = this.state.monday;
        const futureMonday = new Date(
            curMonday.setDate(curMonday.getDate() + 7)
        );

        this.setState({
            monday: futureMonday,
        });
  //return this.state.monday.setDate(this.state.monday.getDate()+7);

}

prevWeek = () => {
  return this.state.monday.setDate(this.state.monday.getDate()-7);
}
  

  render() {
    console.log(this.state.monday);
    
    return (
      <>
      
      <div className="headers">
      <Header nextWeek={this.nextWeek} prevWeek={this.prevWeek}/>
      <Navigation monday={this.state.monday}/>
      </div>
      <Main/>
      </>
    );
  }
}

export default App;
