import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

// App Components
import Header from './Header';
import Home from './Home';
import About from './About';
import Teachers from './Teachers';
import Courses from './Courses';
import NotFound from './NotFound';
import Featured from './Featured';

const App = () => (
  <BrowserRouter basename="/reactApp">
    <div className="container">
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" render={()=>(<About />)} />
        <Route exact path="/teachers" component={Teachers} />
        <Route path="/teachers/:topic/:name" component={Featured} />
        <Route path="/courses" component={Courses} />
        <Route exact component={NotFound} />
      </Switch>
    </div>
  </BrowserRouter>
);

export default App;
