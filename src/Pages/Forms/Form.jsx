import React, {useState} from 'react'
import { Row, Col } from 'react-bootstrap';

//CSS
import '../Forms/Form.css';

//Images
import Search from "../../Assets/Dashboard/search.png";

//Component
import Navbar from "../../Components/Navbar/Navbar";
import TextField from '../../Components/Forms/TextField';

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
                <Col xs='3 pt-2'>
                    <h1 className='page-title left'>FORM</h1>
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
                    <input type="date" className='date-input-text mt-4' placeholder='dd-mm-yyyy'/>
                    <input type="time" className='date-input-text mt-4' />
                </Col>
            </Row>
            <hr className='hr-line'/>
            <Row>
                <Col xs='5' className='left'>
                    <TextField required={true} size={'sm'} formLabel={'Role:'} placeholder={'Role'}/>
                </Col>
                <Col xs='2' className='left'></Col>
            </Row>
            <Row>
            <   Col xs='5' className='left'>
                    <TextField required={true} size={'sm'} formLabel={'First Name:'} placeholder={'First Name'}/>
                </Col>
                <Col xs='2' className='left'></Col>
            </Row>
            <Row>
            <Col xs='5' className='left'>
                    <TextField required={true} size={'sm'} formLabel={'Last Name:'} placeholder={'Last Name'}/>
                </Col>
                <Col xs='2' className='left'></Col>
            </Row>
            <Row>
                <Col xs='5' className='left'>
                    <TextField required={true} size={'sm'} formLabel={'Birthdate:'} placeholder={'MM-DD-YYYY'}/>
                </Col>
                <Col xs='2' className='left'></Col>
            </Row>
            <Row>
                <Col xs='2' className='left'>
                    <label className='forms-text'>Gender: </label>
                </Col>
                <Col xs='1' className='left'>
                    <input className='forms-text me-2' type="radio"></input>
                    <label className='forms-text'>Male: </label>
                </Col>
                <Col xs='1' className='left'>
                    <input className='forms-text me-2' type="radio"></input>
                    <label className='forms-text'>Female: </label>
                </Col>
            </Row>
            <Row>
                <Col xs='5' className='left'>
                    <TextField required={true} size={'sm'} formLabel={'Address:'} placeholder={'Basak, Mandaue City, Cebu, Philippines'}/>
                </Col>
                <Col xs='2' className='left'></Col>
            </Row>
            <hr className='hr-line'/>
            <Row className="left">
                <label>
                    <input type="checkbox" className="checkbox me-2"></input>
                        Agree terms and conditions.
                </label>
            </Row>
            <Row>
                <Col className='right'>
                    <button className='save-btn'>SAVE</button>
                </Col>
            </Row>
            
        </div>
    </div>
  )
}

export default Form;