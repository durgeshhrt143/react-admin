import React, { Component } from 'react';
import DatePicker from "react-datepicker";
 
import "react-datepicker/dist/react-datepicker.css";
class Calender extends Component {
    constructor(props) {
        super(props);
        this.state = {
          startDate: new Date()
        };
        this.handleChange = this.handleChange.bind(this);
      }
      handleChange(date) {
        this.setState({
          startDate: date
        });
      }
    render() { 
        return ( <DatePicker
            selected={this.state.startDate}
            onChange={this.handleChange}
          /> );
    }
}
 
export default Calender;