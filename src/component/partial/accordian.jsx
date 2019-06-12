import React from "react";
import { Link } from "react-router-dom";
import {
  Accordion,
  AccordionItem,
  AccordionItemButton,
  AccordionItemHeading,
  AccordionItemPanel
} from "react-accessible-accordion";

import "react-accessible-accordion/dist/fancy-example.css";
const ToggleAccordian = props => {
  return (
    <Accordion allowZeroExpanded="true">
      <AccordionItem>
        <AccordionItemHeading>
          <AccordionItemButton>
            <i className="fa fa-align-left" aria-hidden="true" />
            <span className="side-navigation">Fund List</span>
          </AccordionItemButton>
        </AccordionItemHeading>
        <AccordionItemPanel>
          <Link to="/two-step-verification">Two Step Verification</Link>
          <Link to="/login">Login</Link>
        </AccordionItemPanel>
      </AccordionItem>
      <AccordionItem>
        <AccordionItemHeading>
          <AccordionItemButton>
            <i className="fa fa-list" aria-hidden="true" />
            <span className="side-navigation">Firm List</span>
          </AccordionItemButton>
        </AccordionItemHeading>
        <AccordionItemPanel>
          <Link to="/total-fund">Total Fund</Link>
          <Link to="/new-user-creation">New User Creation</Link>
          <Link to="/auditors-setting">Auditors Setting</Link>
          <Link to="/block-user-list">Block User List</Link>
          <Link to="/user-logs">User Logs</Link>
        </AccordionItemPanel>
      </AccordionItem>
      <AccordionItem>
        <AccordionItemHeading>
          <AccordionItemButton>
            <i className="fa fa-circle-o" aria-hidden="true" />
            <span className="side-navigation">User Management</span>
          </AccordionItemButton>
        </AccordionItemHeading>
        <AccordionItemPanel>
          <Link to="/e-learning">E-Learning</Link>
          <Link to="/total-firms">Total Firms</Link>
          <Link to="/audit-source">Audit Source</Link>
          <Link to="/fund-details">Fund Details</Link>
          <Link to="/settings">Settings</Link>
        </AccordionItemPanel>
      </AccordionItem>
      <AccordionItem>
        <AccordionItemHeading>
          <AccordionItemButton>
            <i className="fa fa-pie-chart" aria-hidden="true" />
            <span className="side-navigation">WIP</span>
          </AccordionItemButton>
        </AccordionItemHeading>
        <AccordionItemPanel>
          <Link to="/reviewer-settings">Reviewer Settings</Link>
          <Link to="/all-user-list">All User List</Link>
          <Link to="/user-activity">User Activity</Link>
          <Link to="/wip-table">Wip Table</Link>
          <Link to="/template">Template</Link>
        </AccordionItemPanel>
      </AccordionItem>
      <AccordionItem>
        <AccordionItemHeading>
          <AccordionItemButton>
            <i className="fa fa-desktop" aria-hidden="true" />
            <span className="side-navigation">E-Learning</span>
          </AccordionItemButton>
        </AccordionItemHeading>
        <AccordionItemPanel>
          <Link to="/listing">Listing</Link>
        </AccordionItemPanel>
      </AccordionItem>
    </Accordion>
  );
};

export default ToggleAccordian;
