import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

import Landing from './pages/Landing';
import OrphanatesMap from './pages/Orphanates';

function Routes() {
  return (
  
    <BrowserRouter>
      <Route exact path="/" component={Landing}/>
      <Route exact path="/app" component={OrphanatesMap}/>
    </BrowserRouter>

  );
}

export default Routes;