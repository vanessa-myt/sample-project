import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Col, Row } from "react-bootstrap";
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker
} from "react-google-maps";
import Navbar from "../../Components/Navbar/Navbar";
import { getLocationOnLoad } from "../../Helpers/API/GMapsAPI";

import "./Geolocation.css"

const MyMapComponent = withScriptjs(
  withGoogleMap(props => {
    return (
      <GoogleMap
        defaultZoom={17}
        defaultCenter={props.currentPosition}
        onClick={props.onDragEnd}
      >
         <Marker 
            position={props.center} 
            draggable={true}
            onDragEnd={props.onDragEnd}
          />
      </GoogleMap>
    );
  })
);

export default function Geolocation() {
  const [inactive, setInactive] = useState(true)
  var google = window.google
  const [currentPosition, setCurrentPosition] = useState({})
  const [defaultProps, setDefaultProps] = useState({
      center: {
      lat: 0,
      lng: 0
      },
  });
  const [logDetails, setLogDetails] = useState({
    type:"",
    time:"",
    //to be integrated
    address_1:"",
    // -------
    address:"",
    longitude:"",
    latitude:"",
    photo_proof:"",
  })

function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition, error);
  } else { 
    alert("Geolocation is not supported by this browser.");
  }
}

function error(err) {
  alert(`ERROR(${err.code}): ${err.message}`);
}

function showPosition(position) {
  fetchLocation(position.coords.latitude, position.coords.longitude)
  var copy = {...defaultProps}
  copy['center']['lat'] = position.coords.latitude
  copy['center']['lng'] = position.coords.longitude
  setDefaultProps(copy)
  setCurrentPosition(copy)

  logDetails["latitude"] = position.coords.latitude
  logDetails["longitude"] = position.coords.longitude

 
}

function onMarkerDragEnd(coord){
  const { latLng } = coord;
  const lat = latLng.lat();
  const lng = latLng.lng();
  var copy = {...defaultProps}
  copy['center']['lat'] = lat
  copy['center']['lng'] = lng
  setDefaultProps(copy)
  logDetails["latitude"] = lat
  logDetails["longitude"] = lng
  geocodePosition(latLng)
}

function geocodePosition(pos) {
const geocoder = new google.maps.Geocoder();
geocoder.geocode({
  latLng: pos
}, function(responses) {
  if (responses && responses.length > 0) {
    logDetails["address"] = responses[0].formatted_address
    // localStorage.setItem('street_address',  JSON.stringify(responses[0].formatted_address));
  } else {
  
  }
});
}

async function fetchLocation(lat,lng){
  const response = await getLocationOnLoad(lat, lng)
  if(response.data){
    logDetails["address"] = response.data.results[0].formatted_address
  }

}

useEffect(()=>{
  getLocation()
},[])

  return (
    <div className='page'>
    <Navbar
        onCollapse={(inactive) => {
        setInactive(inactive)
        }}
        active={'MAPS'} 
    />
    <div className={`container ${inactive ? "inactive" : "active"}`}>
    {/* First Row */}
        <Row>
            <Col xs='6'>
                <h1 className='page-title left'>GOOGLE MAPS</h1>
            </Col>
            
           
        </Row>
        <hr className='hr-line'/>
        <Row>
          <Col md={8}>
          <MyMapComponent
            googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyAHeix3Mf1YRppXp1hxArkPwkevOZFc1Ew&v=3.exp&libraries=geometry,drawing,places"
            loadingElement={<div style={{ height: `100%` }} />}
            containerElement={<div style={{ height: `75vh` }} />}
            mapElement={<div style={{ height: `80%` }} />}
            center={defaultProps.center}
            onDragEnd={onMarkerDragEnd}
            currentPosition={currentPosition.center}
          />
          </Col>
          <Col md={4}>
            <Row className="location-details text-left">
              <h6 className='text-label me-5'>ADDRESS:</h6>
              <h5 className='text-desc me-5'>{logDetails["address"]}</h5>
              <h6 className='text-label me-5'>LATITUDE:</h6>
              <h5 className='text-desc me-5'>{logDetails["latitude"]}</h5>
              <h6 className='text-label me-5'>LONGITUDE:</h6>
              <h5 className='text-desc me-5'>{logDetails["longitude"]}</h5>
            </Row>
          </Col>
        </Row>
    </div>
    </div>
  );
}