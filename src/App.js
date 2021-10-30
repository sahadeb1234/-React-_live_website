import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import About from './components/About';
import Navbar from './components/Navbar';
import Projects from './components/Projects';
import Resume from './components/Resume';
import Sidebar from './components/Sidebar';

function App() {
  return (
    <Router>
    <div className="App">
      <div className="container">
        <div className="row">
          <div className="col-lg-3">
            <div className="app_sidebar">

              <Sidebar/>



            </div>
            </div>
            <div className="col-lg-9 app_main-content">

       <Navbar/>
       <Switch>
                <Route exact path="/">
                  <About />
                </Route>
                <Route exact path="/resume">
                  <Resume />
                </Route>
                <Route exact path="/projects" component={Projects} />
                <Route>
                  <Redirect to="/" />
                </Route>
              </Switch>



     </div>
     </div>
     </div>
    </div>
    </Router>
  );
}

export default App;
