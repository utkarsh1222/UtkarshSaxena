import React from 'react';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import About from './About';
import Contact from './Contact';
import Home from './Home';


function App() {
  return (
    <>
    <BrowserRouter>
    <Switch>
      <Route exact path='/' component={Home} />
      <Route exact path='/about' component={About} />
      <Route exact path='/contact' component={Contact} />
      <Redirect to='/' />
     </Switch>
    </BrowserRouter>
    </>
  );
}

export default App;
