import React, {Component} from 'react';
import Navbar from './Navbar';
import Homepage from './Homepage';
import Services from './Services';


class App extends Component {
  state = {

  }

  render(){
    return(
      <div className="App">
      <Navbar
      home = "true" />
      <Homepage />
      <Services />
    </div>
    )
  }
}



export default App;
