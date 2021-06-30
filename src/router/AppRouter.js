import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BrowserRouter as Router, Switch, Redirect } from "react-router-dom";
import { startChecking } from "../actions/auth";
import { LoginScreen } from "../components/auth/LoginScreen";
import { DashboardScreen } from "../components/dashboard/DashboardScreen";
import { AddEmployeesScreen } from "../components/employees/AddEmployeesScreen";
import { EmployeesScreen } from "../components/employees/EmployeesScreen";
import { PrivateRoute } from "./PrivateRoute";
import { PublicRoute } from "./PublicRoute";


export const AppRouter = () => {

  const dispatch = useDispatch();
  const { checking, id } = useSelector( state => state.auth)

  //se puede implementar un set timeout para renovar el token despues de X tiempo
  useEffect(() => {
    dispatch( startChecking() )
  }, [dispatch])

  if ( checking ) {
    return (<h5>Espere...</h5>)
  }

  return (
    <Router>
      <div>
        <Switch>
  
          <PublicRoute exact path="/login" component={LoginScreen} isAuthenticated={ !!id } />
          <PrivateRoute exact path="/" component={DashboardScreen} isAuthenticated={ !!id } />
          <PrivateRoute exact path="/empleados" component={EmployeesScreen} isAuthenticated={ !!id } />
          <PrivateRoute exact path="/agregarempleados" component={AddEmployeesScreen} isAuthenticated={ !!id } />

          <Redirect to="/" />

        </Switch>
      </div>
    </Router>
  );
};
