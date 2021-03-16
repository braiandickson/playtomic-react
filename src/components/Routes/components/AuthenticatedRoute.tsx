import React from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { RouteProps } from 'react-router';

import Routes from '../routes';

const DEFAULT_PUBLIC_ROUTE = Routes.LOGIN;
const DEFAULT_PRIVATE_ROUTE = Routes.DASHBOARD;

interface Props extends RouteProps {
    component: any;
    isPublicRoute?: boolean;
    isPrivateRoute?: boolean;
    currentUser?: boolean;
  }

function AuthenticatedRoute({
  isPublicRoute,
  isPrivateRoute,
  currentUser,
  component: Comp,
  ...props
}: Props) {
  if (currentUser) {
    if (isPublicRoute) {
      return (
        <Redirect
          to={{
          pathname: DEFAULT_PRIVATE_ROUTE
          }}
        />
      )
    }
  } else if (isPrivateRoute) {
    return (
      <Redirect
        to={{
            pathname: DEFAULT_PUBLIC_ROUTE
        }}
      />
    );
  }
  return <Comp {...props} />;
}

const mapStateToProps = (state: any) => ({
    currentUser: !!state?.login?.user?.token
  });
  
export default connect(mapStateToProps)(AuthenticatedRoute);