import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import Dashboard from "./dashboard";
import TotalFund from "./total-funds";
import NewUserCreation from "./new-user-creation";
import AuditorsSetting from "./auditors-setting";
import BlockUserList from "./block-user-list";
import UserLogs from "./user-logs";
import ELearning from "./ELearning";
import AuditSource from "./audit-source";
import TatalFirms from "./total-firms";
import FundDetails from "./fund-details";
import Settings from "./settings";
import ReviewerSettings from "./reviewer-settings";
import AllUserList from "./all-user-list";
import UserActivity from "./user-activity";
import WipTable from "./wip-table";
import Template from "./template";
import Listing from "./listing";
import PageNotFound from "./page-not-found";

const Pages = props => {
  return (
    <div className="content-wrapper">
      <Switch>
        <Route path="/" exact component={Dashboard} />
        <Route path="/total-fund" component={TotalFund} />
        <Route path="/new-user-creation" component={NewUserCreation} />
        <Route path="/auditors-setting" component={AuditorsSetting} />
        <Route path="/block-user-list" component={BlockUserList} />
        <Route path="/user-logs" component={UserLogs} />
        <Route path="/e-learning" component={ELearning} />
        <Route path="/audit-source" component={AuditSource} />

        <Route path="/total-firms" component={TatalFirms} />
        <Route path="/fund-details" component={FundDetails} />
        <Route path="/settings" component={Settings} />
        <Route path="/reviewer-settings" component={ReviewerSettings} />
        <Route path="/all-user-list" component={AllUserList} />
        <Route path="/user-activity" component={UserActivity} />
        <Route path="/wip-table" component={WipTable} />
        <Route path="/template" component={Template} />
        <Route path="/listing" component={Listing} />

        <Route path="/page-not-found" component={PageNotFound} />
        <Redirect to="/page-not-found" />
      </Switch>
    </div>
  );
};

export default Pages;
