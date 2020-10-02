import React, { Component } from 'react';
import {Button} from 'react-bootstrap'

class Employee extends Component {
  state = {
    employeeamt: ''
  }
  
  slideChange = (e) => {
    e.preventDefault();
    this.props.employeeInput(this.state.employeeamt);
  }

  onChange = (e) => this.setState({ employeeamt: e.target.value});

  render() {
    return (
      <form>
          <input 
             type="number" 
             name="employeesalary" 
             className="inp2"
             style={{padding: '5px'}}
             placeholder="Enter Minimum Salary ..."
             value={this.state.employeeamt}
             onChange={this.onChange}
          />
        <br></br>
          <Button value="submit" onClick={this.slideChange}>
            Submit
          </Button>
      </form>
    );
}
} 
export default Employee;
