import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

import Landing from './pages/Landing';
import OrphanatesMap from './pages/Orphanates';

function Routes() {
  return (
  
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Landing}/>
        <Route exact path="/app" component={OrphanatesMap}/>
      </Switch>
    </BrowserRouter>

  );
}

export default Routes;