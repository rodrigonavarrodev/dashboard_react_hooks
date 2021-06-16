import React from "react";
import { useSelector } from "react-redux";
import { BrowserRouter as Router, Switch, Redirect } from "react-router-dom";
import { LoginScreen } from "../components/auth/LoginScreen";
import { DashboardScreen } from "../components/dashboard/DashboardScreen";
import { PrivateRoute } from "./PrivateRoute";
import { PublicRoute } from "./PublicRoute";


export const AppRouter = () => {

  const { checking, id } = useSelector( state => state.auth)
  console.log(checking, id);


  return (
    <Router>
      <div>
        <Switch>
  
          <PublicRoute exact path="/login" component={LoginScreen} isAuthenticated={ !!id } />
          <PrivateRoute exact path="/" component={DashboardScreen} isAuthenticated={ !!id } />

          <Redirect to="/" />

        </Switch>
      </div>
    </Router>
  );
};
