import React from 'react';

import { Provider } from 'react-redux';
import store from './store/store';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import HomePage from './pages/HomePage';
import HeroesPage from './pages/HeroesPage';
import HeroesAddPage from './pages/HeroesAddPage';
import LocationsPage from './pages/LocationsPage';
import LocationsAddPage from './pages/LocationsAddPage';

const App = () => {
  return (
    <Provider store={store}>
    <BrowserRouter>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/heroes" component={HeroesPage} /> 
          <Route exact path="/heroes/new" component={HeroesAddPage} /> 
          <Route exact path="/locations" component={LocationsPage} />          
          <Route exact path="/locations/new" component={LocationsAddPage} />          
        </Switch>  
    </BrowserRouter>
    </Provider>
  );
}

export default App;
