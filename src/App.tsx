import React from 'react';
import { BrowserRouter, Switch } from 'react-router-dom';
import RoutesWrapper from './components/RoutesWrapper';
import routes from './routes';

import { GlobalStyle } from './styles/global';

function App() {
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <Switch>
          {routes.map((route) => (
            <RoutesWrapper
              key={route.path}
              path={route.path}
              isPrivate={route.isPrivate || false}
              exact={route.exact || false}
              component={route.component}
            />
          ))}
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
