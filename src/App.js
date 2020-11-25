import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Axios from "axios";

class App extends Component {
  state = { data: null };
  render() {
    Axios.get("http://dummy.restapiexample.com/api/v1/employees").then((response) =>
      this.setState({ data: response.data })
    );
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            {this.state.data}
          </a>
        </header>
      </div>
    );
  }
}

export default App;
