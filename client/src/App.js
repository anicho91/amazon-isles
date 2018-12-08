import React, { Component } from 'react';
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom';
import Homepage from './Pages/HomePage/homepage';
import Clientpage from './Pages/ClientPage/clientpage';
import Providerpage from './Pages/ProviderPage/providerpage';
import * as $ from 'axios';
import './App.css';
import Canvas from './components/Canvas'



const App = () => (
  <BrowserRouter>
      <Switch>
        <Route exact path='/' component={Homepage} />
        <Route exact path='/client' component={Clientpage} />
        <Route exact path='/provider' component={Providerpage} />
        <Route exact path='/canvas' component={Canvas} />
      </Switch>
  </BrowserRouter>

)

export default App;
 
