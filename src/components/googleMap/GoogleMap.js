import React from "react";
import GoogleMapReact from "google-map-react";
const AnyReactComponent = ({ text }) => <div>{text}</div>;

function GoogleMap() {
  return (
    <div>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "" }}
        // defaultCenter={defaultProps.center}
        // defaultZoom={.zoom}
      >
        <AnyReactComponent lat={59.955413} lng={30.337844} text="My Marker" />
      </GoogleMapReact>
    </div>
  );
}

export default GoogleMap;
