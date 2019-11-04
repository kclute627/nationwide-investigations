import React, {Component} from 'react';
import Navbar from './Navbar';
import Homepage from './Homepage'


class App extends Component {
  state = {

  }

  render(){
    return(
      <div className="App">
      <Navbar
      home = "true" />
      <Homepage />
    </div>
    )
  }
}



export default App;
