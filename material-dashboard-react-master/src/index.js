import React from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import { Router, Route, Switch, Redirect } from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.min.css';

// core components
import Admin from "./layouts/Admin.jsx";
import Manager from "./layouts/Manager.jsx";
import Conductor from "./layouts/Conductor.jsx";
import Clerk from "./layouts/Clerk.jsx";
import RTL from "./layouts/RTL.jsx";
import WorkAssign from "./pages/work_assignmt";
import WorkDone from "./pages/work_done";
import AdvancePay from "./views/TableList/advancepay";
 import ContractPay from "./views/TableList/contractpay";
 import Expense from "./views/ManagerExpenses/misc";
 import Officers from "./views/ManagerExpenses/officerpay";
 import ManagerExpenses from "./views/ManagerExpenses/ManagerExpenses.jsx";
import Loan from "./views/TableList/loan";
import LoanM from "./views/ManagerExpenses/loanm";
import Weather from "./pages/weather.js";
import Login from "./pages/login.jsx";
import ClerkExpenses from "./views/ClerkExpenses/ClerkExpenses.jsx";
import DailyWork from "./views/ConductorDailyWork/ConductorDailyWork.jsx";
import DailySummary from "./views/ManagerDailySummary/ManagerDailySummary.jsx";
import AddLabourer from "./views/AddLabourer/add_labourer.js";
import DeleteLabourer from "./views/AddLabourer/delete_labourer.js";
import TableList from "./views/TableList/TableList.jsx";

import "./assets/css/material-dashboard-react.css?v=1.6.0";

const hist = createBrowserHistory();

ReactDOM.render(
  <Router history={hist}>
    <Switch>
      <Route path="/manager" component={Manager} />
      <Route path="/admin" component={Admin} />
      <Route path="/conductor" component={Conductor} />
      <Route path="/clerk" component={Clerk} />
      <Route path="/rtl" component={RTL} />
      <Route exact path="/work_assignmt" component={WorkAssign}/>
      <Route exact path ="/work_done" component={WorkDone}/>
      <Route exact path ="/weather" component={Weather}/>
      <Route exact path ="/login" component={Login}/>
      <Route exact path ="/conductor/ConductorDailyWork" component={DailyWork}/>
      <Route exact path ="/conductor/ExpensesHandling" component={TableList}/>
      <Route exact path ="/conductor/AddLabourer" component={AddLabourer}/>
      <Route exact path ="/manager/ExpensesHandling" component={ManagerExpenses}/>
      <Route exact path ="/manager/DailySummary" component={DailySummary}/>
      <Route exact path ="/clerk/ExpensesHandling" component={ClerkExpenses}/>
      <Route exact path="/advancepay" component={AdvancePay}/>
      <Route exact path="/contractpay" component={ContractPay}/>
      <Route exact path="/misc" component={Expense}/>
      <Route exact path="/loan" component={Loan}/>
      <Route exact path="/loanm" component={LoanM}/>
      <Route exact path="/officerpay" component={Officers}/>
      <Route exact path="/add_labourer" component={AddLabourer}/>
      <Route exact path="/delete_labourer" component={DeleteLabourer}/>?
      <Redirect from="/" to="/login" />
    </Switch>
  </Router>,
  document.getElementById("root")



  );