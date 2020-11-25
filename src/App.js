import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Employees from "./components/Employees/Employees";
import Employee from "./components/Employee/Employee";
class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <header className="App-header">
            <div>
              <img src={logo} className="App-logo" alt="logo" />
              <span>Test website</span>
            </div>
          </header>

          <Switch>
            <Route path="/" exact component={Employees}></Route>
            <Route path="/employee/:id" component={Employee}></Route>
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
