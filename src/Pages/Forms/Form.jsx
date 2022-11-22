import React, {useState} from 'react'
import { Row, Col } from 'react-bootstrap';

//CSS
import '../Forms/Form.css';

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
            <h1 className='page-title left'>FORM</h1>
            </Row>
            <hr className='hr-line'/>
            <Row>
                <Col xs='2' className='left'>
                    <label className='forms-text'>Role: </label>
                </Col>
                <Col xs='5' className='left'>
                    <select className='form-dropdown'>
                        <option>Select</option>
                        <option>All</option>
                    </select>
                </Col>
            </Row>
            <Row>
                <Col xs='2' className='left'>
                    <label className='forms-text'>First Name: </label>
                </Col>
                <Col xs='5' className='left'>
                    <input type="text" className='form-input-text'></input>
                </Col>
            </Row>
            <Row>
                <Col xs='2' className='left'>
                    <label className='forms-text'>Last Name: </label>
                </Col>
                <Col xs='5' className='left'>
                    <input type="text" className='form-input-text'></input>
                </Col>
            </Row>
            <Row>
                <Col xs='2' className='left'>
                    <label className='forms-text'>BirthDate: </label>
                </Col>
                <Col xs='5' className='left'>
                    <input type="text" className='form-input-text'></input>
                </Col>
            </Row>
            <Row>
                <Col xs='2' className='left'>
                    <label className='forms-text'>Address: </label>
                </Col>
                <Col xs='5' className='left'>
                    <input type="text" className='form-input-text'></input>
                </Col>
            </Row>
           
                <TextField 
                required={true}
                size={'sm'}
                formLabel={'Custom Textfield'}
                placeholder={'Test from core'}/>
           
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