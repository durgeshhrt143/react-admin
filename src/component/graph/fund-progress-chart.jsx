import React, { Component } from "react";
import { Bar } from "react-chartjs-2";
class FundProgressChart extends Component {
  render() {
    return <Bar data={this.props.data} height={100} />;
  }
}

export default FundProgressChart;
