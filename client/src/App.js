import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Homepage from './Pages/HomePage/homepage';
import Clientpage from './Pages/ClientPage/clientpage';
import Fashionpage from './Pages/FashionPage/fashionpage';
import './App.css';
import Providerpage from './Pages/ProviderPage/providerpage'
import Searchpage from './Pages/SearchPage/searchpage'

const App = () => (
  
  <BrowserRouter>
      <Switch>
        <Route exact path='/' component={Homepage} />
        <Route exact path='/client' component={Clientpage} />
        <Route exact path='/provider' component={Providerpage} />
        <Route exact path='/fashion' component={Fashionpage} />  
        <Route exact path='/search' component={Searchpage} />
        
      </Switch>
  </BrowserRouter>

)


export default App;
 
