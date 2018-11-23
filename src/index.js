import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {Employee} from './Employee';
import * as serviceWorker from './serviceWorker';
let Sname='John';
let slocation='Kerala';
var refEmployee=(
    <div>
        <Employee name="linto" location="qatar"/>
        <Employee name={Sname} location={slocation}/>
    </div>
)
ReactDOM.render(<App />, document.getElementById('root'));
ReactDOM.render(refEmployee,document.getElementById('emp'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
