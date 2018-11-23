import React from 'react';
export class Student extends React.Component{
    render(){
        return(
            <div>
                <h1>{this.props.children}</h1>
                <p>standard : {this.props.stdinfo}</p>
                <br />
                <button onClick={this.props.myClick}>Event Binding</button>
            </div>
        )
    }
}