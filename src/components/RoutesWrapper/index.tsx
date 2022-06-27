import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import { Routes } from '../../interfaces/routes.interface';
import { PageContainer } from '../pageContainer';
function RoutesWrapper({
  path,
  component: Component,
  isPrivate = false,
  exact,
}: Routes) {
  const user = localStorage.getItem('user');

  return (
    <Route
      path={path}
      exact={exact}
      render={(props) =>
        isPrivate && !user ? (
          <Redirect to={'/'} />
        ) : (
          <PageContainer>
            <Component {...props} />
          </PageContainer>
        )
      }
    />
  );
}

export default RoutesWrapper;
