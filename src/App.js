import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './components/Home/Home';
import NavBar from './components/NavBar/NavBar';
// import SignUp from './components/SignUp/SignUp';
// import PlaceOrder from './components/PlaceOrder/PlaceOrder';
// import Tracking from './components/Tracking/Tracking';



function App() {
  return (
    <div className="App">
     
      <Router>
        <NavBar></NavBar>
        <Switch>
          <Route path="/home">
            <Home></Home>
          </Route>
          {/* <Route path="/signup">
            <SignUp></SignUp>
          </Route>
          <Route path="/order">
            <PlaceOrder></PlaceOrder>
          </Route>
          <Route path="/tracking">
            <Tracking></Tracking>
          </Route> */}
          <Route exact path="/">
            <Home></Home>
          </Route>
        </Switch>
      </Router>
     
    </div>
  );
}

export default App;
