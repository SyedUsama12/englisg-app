import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App'
import Hello from './hello'
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
          
<div> <App age= {30} name = {"usama"} />

<br/>
<Hello name = "Shaffay " age= "4"></Hello>


</div> ,



document.getElementById("root")
  
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
