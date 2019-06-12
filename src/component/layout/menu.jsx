import React, { Component } from "react";
import { Link } from "react-router-dom";
import ToggleAccordian from "../partial/accordian";
class Menu extends Component {
  constructor(props) {
    super(props);
    this.state = { activeTab: 1 };
  }
  toggle(tab) {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab
      });
    }
  }
  getClass = tabs => {
    let classes = "";
    classes += this.state.activeTab === tabs ? "active" : "";
    return classes;
  };
  render() {
    return (
      <aside className="main-sidebar">
        <section className="sidebar">
          <ul className="sidebar-menu">
            
            <li className="treeview">
              <Link
                to="/"
                className={this.getClass(1)}
                onClick={() => this.toggle(1)}
              >
                <i className="fa fa-home" /> <span>Dashboard</span>
              </Link>
            </li>
          </ul>
        </section>
        <ToggleAccordian />
      </aside>
    );
  }
}

export default Menu;
