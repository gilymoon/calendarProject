import React, { Component } from 'react';
import moment from 'moment'
import Event from './Event'

class Hour extends Component {
  render() {
    // console.log(this.props.events[0].date);
    // console.log(this.props.day);
    let eventItself;
    if(this.props.events===[]){
eventItself = '';
    }
    
    if((this.props.events[1].date) === moment(this.props.day).format("YYYY-MM-DD") && this.props.events[0].startTime.substr(0, 2) === this.props.hour.substr(0, 2)){
      eventItself = <Event events={this.props.events}/>;
      console.log(this.props.events[1].date);
      console.log(moment(this.props.day).format("YYYY-MM-DD"));
      
    }
    else{
      eventItself = <div></div>;
      console.log(this.props.events[0].date);
      console.log(moment(this.props.day).format("YYYY-MM-DD"));
      
    }
    return(
      <div className="hour" >
        {eventItself}
        </div>

    )
  }
 
}

export default Hour