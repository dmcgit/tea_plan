import React from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import { Router, Route, Switch, Redirect } from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.min.css';

// core components
import Admin from "layouts/Admin.jsx";
import RTL from "layouts/RTL.jsx";
import WorkAssign from "./pages/work_assignmt";
import WorkDone from "./pages/work_done";
import AdvancePay from "./views/TableList/advancepay";
import ContractPay from "./views/TableList/contractpay";
import Expense from "./views/TableList/misc";
import Officers from "./views/TableList/officerpay";
import Loan from "./views/TableList/loan";
import Weather from "./pages/weather.js"

import "assets/css/material-dashboard-react.css?v=1.6.0";

const hist = createBrowserHistory();

ReactDOM.render(
  <Router history={hist}>
    <Switch>
      <Route path="/admin" component={Admin} />
      <Route path="/rtl" component={RTL} />
      <Route exact path="/work_assignmt" component={WorkAssign}/>
      <Route exact path ="/work_done" component={WorkDone}/>
      <Route exact path ="/weather" component={Weather}/>
      <Route exact path="/advancepay" component={AdvancePay}/>
      <Route exact path="/contractpay" component={ContractPay}/>
      <Route exact path="/misc" component={Expense}/>
      <Route exact path="/loan" component={Loan}/>
      <Route exact path="/officerpay" component={Officers}/>
      <Redirect from="/" to="/admin/dashboard" />
    </Switch>
  </Router>,
  document.getElementById("root")
);
