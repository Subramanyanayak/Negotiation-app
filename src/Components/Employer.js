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
  alertMsg = () =>{
	  alert('Input field cannot be empty')
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
          <Button  value="submit" onClick={this.state.title == ''? this.alertMsg : this.slideChange}>
           Submit
         </Button>
      </form>
    );
}
}
 
export default Employer;
