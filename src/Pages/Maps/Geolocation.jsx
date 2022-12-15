import React from "react";
import { useState } from "react";
import { Col, Row } from "react-bootstrap";
import ReactDOM from "react-dom";
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker
} from "react-google-maps";
import Navbar from "../../Components/Navbar/Navbar";

const MyMapComponent = withScriptjs(
  withGoogleMap(props => {
    return (
      <GoogleMap
        defaultZoom={14}
        defaultCenter={{ lat: 60.2517722, lng: 24.8989093 }}
      >
        
        <Marker position={{ lat: 60.2517722, lng: 24.8989093 }} />
      </GoogleMap>
    );
  })
);

export default function Geolocation() {
  const [inactive, setInactive] = useState(true)
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
    <div className="App">
      <MyMapComponent
        googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyAHeix3Mf1YRppXp1hxArkPwkevOZFc1Ew&v=3.exp&libraries=geometry,drawing,places"
        loadingElement={<div style={{ height: `80%` }} />}
        containerElement={<div style={{ height: `95vh` }} />}
        mapElement={<div style={{ height: `80%` }} />}
      />
    </div>
    </div>
    </div>
  );
}


// import React, {useState} from 'react'
// import { Row, Col } from 'react-bootstrap';

// //CSS
// import '../Forms/Form.css';
// import '../../Pages/Dashboard/Dahsboard.css';
// //Images
// import Search from "../../Assets/Dashboard/search.png";
// import User from "../../Assets/Dashboard/user.png";
// //Component
// import Navbar from "../../Components/Navbar/Navbar";
// import { autoRefresh } from '../../Helpers/Utils/Common';
// import {
//     withScriptjs,
//     withGoogleMap,
//     GoogleMap,
//     Marker,
//   } from "react-google-maps";

// function Geolocation() {

//     const [inactive, setInactive] = useState(false);

//     const MapWithAMarker = withScriptjs(withGoogleMap(props =>
//         <GoogleMap
//           defaultZoom={8}
//           defaultCenter={{ lat: -34.397, lng: 150.644 }}
//         >
//           <Marker
//             position={{ lat: -34.397, lng: 150.644 }}
//           />
//         </GoogleMap>
//       ));
      
 

//   return (
//     <div className='page'>
//         <Navbar
//             onCollapse={(inactive) => {
//             setInactive(inactive)
//             }}
//             active={'MAPS'} 
//         />
//         <div className={`container ${inactive ? "inactive" : "active"}`}>
//             <Row>
//                 <Col xs='6'>
//                     <h1 className='page-title left'>MAPS</h1>
//                 </Col>
//             </Row>
//             <hr className='hr-line'/>
//             <Col md={12} className="p-2" style={{ height: '70vh', width: '100%'}}>
//             <MapWithAMarker
//                 googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyAHeix3Mf1YRppXp1hxArkPwkevOZFc1Ew&v=3.exp&libraries=places"
//                 loadingElement={<div style={{ height: `100%` }} />}
//                 containerElement={<div style={{ height: `400px` }} />}
//                 mapElement={<div style={{ height: `100%` }} />}
//             />
//             </Col>
//         </div>
//     </div>
//   )
// }

// export default Geolocation;