import React, { lazy } from 'react';
import { Router, Switch, Redirect } from 'react-router-dom';
import { createBrowserHistory } from "history";

import Routes from './routes';
import AuthenticatedRoute from './components/AuthenticatedRoute';
import Suspense from './components/CustomSuspense';
import Loading from '../Loading';

const customHistory = createBrowserHistory();

const Login = lazy(() => import('../../screens/Login'));
const Dashboard = lazy(() => import('../../screens/Dashboard'));

function AppRoutes() {
  return (
    <Router history={customHistory}>
      <Suspense fallback={Loading}>
        <Switch>
          <AuthenticatedRoute isPublicRoute path={Routes.LOGIN} component={Login} />
          <AuthenticatedRoute isPrivateRoute path={Routes.DASHBOARD} component={Dashboard} />
          <Redirect to={Routes.LOGIN} />
        </Switch>
      </Suspense>
    </Router>
  )
}

export default AppRoutes;
