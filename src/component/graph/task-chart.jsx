import React, { Component } from "react";
import { Doughnut } from "react-chartjs-2";

class TaskChart extends Component {
  render() {
    return <Doughnut data={this.props.data} width={100} height={50} />;
  }
}

export default TaskChart;
