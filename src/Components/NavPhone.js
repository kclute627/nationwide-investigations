import React, {Component, Fragment} from 'react';






class NavPhone extends Component {

    state={
        phoneClicked: false,
    }

    componentDidMount() {    
        if(this.state.phoneClicked){
          document.body.style.overflow = 'hidden';
        }    
      }
  
      componentWillUnmount() {
        document.body.style.overflow = 'unset';
    }


    clickHandler = () => {

        this.setState({
          phoneClicked: !this.state.phoneClicked,
        })
      }

    render(){

        const phoneNav = (
            <div 
            className="phone__nav"
            onClick={this.clickHandler}>
              <div className={this.state.phoneClicked ? "phone__nav-1 transition-3 " : "phone__nav-1"}></div>
              <div className={this.state.phoneClicked ? "phone__nav-2 transition-1" : "phone__nav-2"}></div>
              <div className={this.state.phoneClicked ? "phone__nav-3 transition-2" : "phone__nav-3"}></div>
            </div>
          );

         


        return(
            <Fragrment>
                {phoneNav}
                <div className="phoneMenu">
        
            </div>

            </Fragrment>
            

        )
    }
}


export default NavPhone;


{phoneNav}
          {this.state.phoneClicked ? phoneMenu : null}