import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Student } from './ChildCmp';
import {PropValidation} from './PropValidation';

class App extends Component {
  studName= "XI class"
  demoFunction(){
    alert('Wish you a good question Experience');
  }
  render() {
    return (
      <div>
        <h1>linto's first app</h1>
        <Student stdinfo={this.studName} myClick={this.demoFunction}>Student Information</Student>
        <PropValidation feedBack="Excellent" fTime="li" fnvalidation={this.demoFunction} >Property Validation</PropValidation>
      </div>
    );
  }
}

export default App;
