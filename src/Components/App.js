import React, {Component} from 'react';
import Navbar from './Navbar';
import Homepage from './Homepage'
import Footer from './Footer';
import Services from './Services';
import Members from './Members';
import ContactUs from './ContactUs';


class App extends Component {
  state = {

  }

  render(){
    return(
      <div className="App">
      <Navbar
      home = "true"/>
      <Homepage />
      <Services/>
      <ContactUs />
      <Members />
      <Footer/>
    </div>
    )
  }
}



export default App;
