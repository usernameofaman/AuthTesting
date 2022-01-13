import React from "react";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import Register from "./components/Register/Register";
import Login from "./components/Login/Login";
import "./components/Home/Home.css";
import Home from "./components/Home/Home"
import testAPI from "./components/testAPI/testAPI"
import Redux from "./components/Redux/ReduxUI"
import Nav from "./components/Nav/Nav"

function App() {
  return (
    <BrowserRouter>
      <Nav />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/testAPI" component={testAPI} />
        <Route path="/signin" component={Login} />
        <Route path="/Home" component={Home} />
        <Route path="/Redux" component={Redux} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
