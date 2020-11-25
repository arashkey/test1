import React, { Component } from "react";
import axios from "axios";
import {
  Link,
} from "react-router-dom";

class Employees extends Component {
  state = { data: [] };
  componentDidMount() {
    axios
      .get("http://dummy.restapiexample.com/api/v1/employees")
      .then((response) => {
        var result = response.data;
        if (result.status === "success") {
          this.setState({ data: result.data });
        }
      });
  }
  render() {
    return (
      <div>
        {JSON.stringify(this.state.data[0])}
        {this.state.data.map((item) => (
          <div key={item.id}>
            <Link to={('/employee/' + item.id)}>{item.employee_name}</Link>
          </div>
        ))}
      </div>
    );
  }
}
export default Employees;
