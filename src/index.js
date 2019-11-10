import React from 'react';
import ReactDOM from 'react-dom';
import "./sass/main.scss";
import App from './Components/App';
import About from './Components/About'; 
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Investigations from './Components/Services/Investigations';
import Document from './Components/Services/Document';
import ProcessServing from './Components/Services/ProcessServing';
import Errors from './Components/Errors';
import * as serviceWorker from './serviceWorker';

const routing = (
    <Router>
         <Switch>
        <Route path='/about' component={About}/>
        <Route path='/processserving' component={ProcessServing}/>
        <Route path= '/investigations' component={Investigations}/>
        <Route path= '/document' component={Document}/>
        <Route exact path='/' component={App} />  
        <Route component={Errors}/>     
    </Switch>
    </Router>
   
)

ReactDOM.render(routing, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
