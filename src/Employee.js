import React from 'react';
import './Employee.css';
export class Employee extends React.Component{
    render(){
        return(
            <div className="person">
                <h1>Name : {this.props.name}</h1>
                <h1>Location : {this.props.location} </h1>
            </div>
        );
    }
}