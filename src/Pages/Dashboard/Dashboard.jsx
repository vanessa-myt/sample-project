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

function Dashboard() {

    const [inactive, setInactive] = useState(false);

  return (
    <div className='page'>
        <Navbar
            onCollapse={(inactive) => {
            setInactive(inactive)
            }}
            active={'MANAGE'} 
        />
        <div className={`page-container ${inactive ? "inactive" : "active"}`}>
        {/* First Row */}
            <Row>
                <Col xs='6'>
                    <h1 className='page-title left'>DASHBOARD</h1>
                </Col>
                
                <Col xs='6'>
                    <div className='branch-wrapper right'>
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
            </Row>
            <hr className='hr-line'/>
            <Row>
                <Col xs='3'>
                    <Row>
                        <Col>
                            <div className='history-cont'>
                                <Row>
                                    <Col xs='6'>
                                        <img src={User} className="dashboard-icons left"></img>
                                    </Col>
                                    <Col xs='6 left pt-2'>
                                        <label className='subtitle'>1389</label>
                                        <Row>
                                            <label className='ms-2 text-label'>Users</label>
                                        </Row>
                                    </Col>
                                </Row>
                            </div>     
                        </Col>
                    </Row>
                </Col>
                <Col xs='3'>
                    <Row>
                        <Col>
                            <div className='history-cont'>
                                <Row>
                                    <Col xs='6'>
                                        <img src={User} className="dashboard-icons left"></img>
                                    </Col>
                                    <Col xs='6 left pt-2'>
                                        <label className='subtitle'>569</label>
                                        <Row>
                                            <label className='ms-2 text-label'>New Orders</label>
                                        </Row>
                                    </Col>
                                </Row>
                            </div>     
                        </Col>
                    </Row>
                </Col>
                <Col xs='3'>
                    <Row>
                        <Col>
                            <div className='history-cont'>
                                <Row>
                                    <Col xs='6'>
                                        <img src={User} className="dashboard-icons left"></img>
                                    </Col>
                                    <Col xs='6 left pt-2'>
                                        <label className='subtitle'>1000</label>
                                        <Row>
                                            <label className='ms-2 text-label'>Income</label>
                                        </Row>
                                    </Col>
                                </Row>
                            </div>     
                        </Col>
                    </Row>
                </Col>
                <Col xs='3'>
                    <Row>
                        <Col>
                            <div className='history-cont'>
                                <Row>
                                    <Col xs='6'>
                                        <img src={User} className="dashboard-icons left"></img>
                                    </Col>
                                    <Col xs='6 left pt-2'>
                                        <label className='subtitle'>852</label>
                                        <Row>
                                            <label className='ms-2 text-label'>Downloads</label>
                                        </Row>
                                    </Col>
                                </Row>
                            </div>     
                        </Col>
                    </Row>
                </Col>
           </Row>
        </div>
    </div>
  )
}

export default Dashboard;