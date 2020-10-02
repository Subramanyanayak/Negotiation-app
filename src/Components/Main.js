import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Employer from './Employer';
import Employee from './Pages/Employee';
import { Link } from 'react-router-dom';
import {Button, Modal} from 'react-bootstrap'

class Main extends Component {
    storeInput = (v) =>{
        this.setState({ employerinput: v });
    }

    storeInput2 = (e) =>{
      this.setState({ employee: e });
      this.setState({ visible: true });
      this.setState({newslide: 'false'});
      this.setState({ employeeinput: e});
    }

  closeModal = () =>{
    this.setState({ visible: '' });
  }

    state = {
        newslide: 'false',
        employee: '',
        visible: false,
        employerinput: '',
        employeeinput: '',
        success: 'Success',
        failure: 'Failure'
    }

    newSlide = () =>{
        this.setState({newslide: 'true'});
    }

    render() {
    return (
        <BrowserRouter>
        <div style={formStyle}>
          <Link to="/">Employer</Link> | <Link to="/Employee">Employee</Link>
          {this.state.newslide === 'false'?
          <Route exact path="/" render={props => (
                <Employer employerInput={this.storeInput} newSlide={this.newSlide} />
          )} />:  <Route path="/Employee" render={props => (
            <Employee employeeInput={this.storeInput2} alertMsg={this.outputAlert}/>
            )} />}
      </div>

      <Modal show={this.state.visible} size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered >
        <Modal.Header>  {this.state.employerinput <=  this.state.employeeinput ? this.state.success:this.state.failure}</Modal.Header>
        <Modal.Body>Maximum offer was: {this.state.employerinput} <br></br> Minimum expected salary was: {this.state.employeeinput}</Modal.Body>
           <Modal.Footer>
             <Button onClick={this.closeModal}>Close</Button>
           </Modal.Footer>
           </Modal>
      </BrowserRouter>
    );
  }
}
  
const formStyle = {
    border: '1px solid #333',
    width: '40%',
    height: '30%',
    padding: '30px',
    lineHeight: '100px',
    textAlign: 'center',
    marginLeft: '30%',
    marginTop: '10%'
  };

export default Main;
