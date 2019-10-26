import React, {Component} from 'react';
import Navbar from './Navbar';


class App extends Component {
  state = {

  }

  render(){
    return(
      <div className="App">
      <Navbar
      home = "true"/>
    </div>
    )
  }
}



export default App;
