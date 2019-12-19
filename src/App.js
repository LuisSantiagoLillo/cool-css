import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import './App.css';

// COMPONENTS
import Navigation from './components/navigation/Navigation';
// import FormAnimals from './components/forms/formAnimals/FormAnimals';
import SkyLogin from './components/logins/sky_login/SkyLogin';
import ButtonsHover from './components/buttons/buttons-hover-styles/ButtonsHover';
import Loadings from './components/loadings/Loadings';
import Images from './components/images/Images';
import CarDriving from './components/logins/car_driving/CarDriving';


function App() {
  return (
    <Router>
      <Navigation/>
      <Switch>
        <Route exact path="/images">
          <Images/>
        </Route>
        <Route exact path="/skyLogin">
          <SkyLogin/>
        </Route>
        <Route exact path="/carDriving">
          <CarDriving/>
        </Route>
        <Route exact path="/buttonsHover">
          <ButtonsHover/>
        </Route>
        <Route exact path="/loading">
          <Loadings/>
        </Route>

      </Switch>
    </Router>
  );
}

export default App;
