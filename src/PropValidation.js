import React from 'react';
import PropTypes from 'prop-types';
export class PropValidation extends React.Component{
    render(){
        return(
            <div>
                <h1>{this.props.children}</h1>
                <p>Training FeedBack: {this.props.feedBack}</p>
                <p>time : {this.props.fTime}</p> 
            </div>

        );
    }
}
PropValidation.PropTypes = {
    feedBack:PropTypes.string,
    fTime:PropTypes.number,
    fnValidation:PropTypes.func,
    children:PropTypes.element.isRequired

}