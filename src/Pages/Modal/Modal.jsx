import React, {useState} from 'react'
import { Row, Col } from 'react-bootstrap';

//CSS
import '../Reports/Report.css';

//Images
import Search from "../../Assets/Dashboard/search.png";

//Component
import Navbar from "../../Components/Navbar/Navbar";
import Table from "../../Components/Table/Table";
function Modal() {

    const [inactive, setInactive] = useState(false);

  return (
    <div className='page'>
        <Navbar
            onCollapse={(inactive) => {
            setInactive(inactive)
            }}
            active={'REPORT'} 
        />
        <div className={`page-container ${inactive ? "inactive" : "active"}`}>
        {/* First Row */}
            <Row>
                <Col xs='3 pt-2'>
                    <h1 className='page-title left'>MODAL</h1>
                </Col>
                <Col xs='5'>
                    <div className='branch-wrapper right pt-3'>
                        <input 
                            type="text" 
                            name="name" 
                            placeholder='Search' 
                            className='search-input-text'                    
                        />
                        <div className="branch-icon">
                            <img className='search-icon' src={Search}></img>
                        </div>
                    </div>
                </Col>
                <Col xs='4 right'>
                    <button className='add-btn me-4'>ADD</button>
                    <button className='add-btn me-4'>PRINT</button>
                    <button className='add-btn'>DOWNLOAD CSV</button>
                </Col>
            </Row>
            <hr className='hr-line'/>
            
        </div>
    </div>
  )
}

export default Modal;