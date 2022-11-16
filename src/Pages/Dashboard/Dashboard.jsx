import React, {useState} from 'react'
import { Row, Col } from 'react-bootstrap';

//CSS
import '../Forms/Form.css';
import '../../Pages/Dashboard/Dahsboard.css';
//Images
import Search from "../../Assets/Dashboard/search.png";

//Component
import Navbar from "../../Components/Navbar/Navbar";

function Form() {

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
                <Col>
                    <h1 className='page-title-edit left'>DASHBOARD</h1>
                </Col>
                <div className='branch-wrapper'>
                            <input 
                                type="text" 
                                name="name" 
                                placeholder='Search loyalty type' 
                                className='branch-input'
                                // onChange={(e) => handleFilterChange(e)}
                        
                            />
                            <div className="branch-icon">
                                <img className="search-icon left" src={Search}></img>
                            </div>
                        </div>
                <Col>
                    <input type="text" className='search-input-text search-img'  placeholder="Search"></input>
                    {/* <img className="search-icon" src={Search}></img> */}
                </Col>
            </Row>
            <hr className='hr-line'/>
           
        </div>
    </div>
  )
}

export default Form;