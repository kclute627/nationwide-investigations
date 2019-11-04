import React, {Component} from 'react';
import Navbar from './Navbar';
import Homepage from './Homepage'
import Footer from './Footer';


class App extends Component {
  state = {

  }

  render(){
    return(
      <div className="App">
      <Navbar
      home = "true"/>
      <Homepage />
      <Footer/>
    </div>
    )
  }
}



export default App;
