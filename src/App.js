import logo from './logo.svg';
import './App.css';
import React from "react";
import Body from "./components/Body/Body/Body";
// import Login from "./components/Login/Login";


import {
  BrowserRouter as Router,
  Switch,
  Route,

} from "react-router-dom";


function App() {
  return (
    <div >
        <Router>
        <Switch>
        <Route path="/">
           <Body></Body>
          </Route>
          {/* <Route path="/login">
           <Login></Login>
          </Route> */}
          <Route path="/">
           <Body></Body>
        </Route>
        </Switch>
    </Router>
    </div>
  );
}

export default App;
