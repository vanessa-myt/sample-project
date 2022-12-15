import React, {useState} from 'react'
import { Row, Col } from 'react-bootstrap';

//CSS
import '../Forms/Form.css';
import '../../Pages/Dashboard/Dahsboard.css';
//Images
import Search from "../../Assets/Dashboard/search.png";
import User from "../../Assets/Dashboard/user.png";
//Component
import Navbar from "../../Components/Navbar/Navbar";
import { autoRefresh } from '../../Helpers/Utils/Common';
import {
    withScriptjs,
    withGoogleMap,
    GoogleMap,
    Marker,
  } from "react-google-maps";

function Geolocation() {

    const [inactive, setInactive] = useState(false);

    const MapWithAMarker = withScriptjs(withGoogleMap(props =>
        <GoogleMap
          defaultZoom={8}
          defaultCenter={{ lat: -34.397, lng: 150.644 }}
        >
          <Marker
            position={{ lat: -34.397, lng: 150.644 }}
          />
        </GoogleMap>
      ));
      
 

  return (
    <div className='page'>
        <Navbar
            onCollapse={(inactive) => {
            setInactive(inactive)
            }}
            active={'MAPS'} 
        />
        <div className={`container ${inactive ? "inactive" : "active"}`}>
            <Row>
                <Col xs='6'>
                    <h1 className='page-title left'>MAPS</h1>
                </Col>
            </Row>
            <hr className='hr-line'/>
            <Col md={12} className="p-2" style={{ height: '70vh', width: '100%'}}>
            <MapWithAMarker
                googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyAHeix3Mf1YRppXp1hxArkPwkevOZFc1Ew&v=3.exp&libraries=places"
                loadingElement={<div style={{ height: `100%` }} />}
                containerElement={<div style={{ height: `400px` }} />}
                mapElement={<div style={{ height: `100%` }} />}
            />
            </Col>
        </div>
    </div>
  )
}

export default Geolocation;