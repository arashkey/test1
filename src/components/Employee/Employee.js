import React, { Component } from "react";
import axios from "axios";
import {
  Link,
  BrowserRouter,
  Switch,
  Route,
  useParams,
} from "react-router-dom";
class Employee extends Component {
  state = { data: [] };
  componentDidMount() {
    console.log(1);
    axios
      .get("http://dummy.restapiexample.com/api/v1/employee/" + this)
      .then((response) => {
        var result = response.data;
        if (result.status === "success") {
          this.setState({ data: result.data });
        }
      });
  }
  render(match) {
    return (
      <div>
        <table>
          <tbody>
            <tr>
              <td colSpan="2">Employee</td>
            </tr>
            <tr>
              <td>Name</td>
              <td>{this.name}</td>
            </tr>
            <tr>
              <td>Family</td>
              <td>{match}</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default Employee;
