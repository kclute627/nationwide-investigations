import React, { Component } from "react";
import { Map, GoogleApiWrapper } from "google-maps-react";

class Maps extends Component {
  render() {
    return (
      <Map
        className="map"
        google={this.props.google}
        zoom={14}
        
        initialCenter={{
          lat: -1.2884,
          lng: 36.8233
        }}
      />
    );
  }
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyCCBYfUuvZBCZVO7y7SH2ZJoBuxMD3A9_g"
})(Maps);
