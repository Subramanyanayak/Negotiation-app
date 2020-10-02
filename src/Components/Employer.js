import React, { Component } from 'react';
import {Button} from 'react-bootstrap'

class Employer extends Component {
  state = {
    title: ''
  }

  slideChange = (e) => {
    this.props.newSlide();
    e.preventDefault();
    this.props.employerInput(this.state.title);
    
  }

  onChange = (e) => this.setState({ title: e.target.value});

  render() {
    return (
      <form onSubmit={this.onSubmit}>
          <input 
             type="number" 
             name="salary" 
             className="inp"
             style={{padding: '5px'}}
             placeholder="Enter Maximum Offer ..."
             value={this.state.title}
             onChange={this.onChange}
          />
        <br></br>
          <Button  value="submit" onClick={this.slideChange}>
           Submit
         </Button>
      </form>
    );
}
}
 
export default Employer;
