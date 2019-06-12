import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import React, { Component } from "react";
class TabsComponent extends Component {
  constructor(props) {
    super(props);
    this.state = { tabIndex: 0 };
  }
  render() {
    return (
      <Tabs
        selectedIndex={this.state.tabIndex}
        onSelect={tabIndex => this.setState({ tabIndex })}
      >
        <TabList>
          <Tab>All Users</Tab>
          <Tab>Accountant</Tab>
          <Tab>Auditors</Tab>
          <Tab>Reviewers</Tab>
          <Tab>Blocked Users</Tab>
          <Tab>Login History</Tab>
          <Tab>User Activity</Tab>
        </TabList>
        <TabPanel>All Users Con</TabPanel>
        <TabPanel>Accountant Con</TabPanel>
        <TabPanel>Auditors Con</TabPanel>
        <TabPanel>Reviewers Con</TabPanel>
        <TabPanel>Blocked Users Con</TabPanel>
        <TabPanel>Login History Con</TabPanel>
        <TabPanel>User Activity Con</TabPanel>
      </Tabs>
    );
  }
}

export default TabsComponent;
