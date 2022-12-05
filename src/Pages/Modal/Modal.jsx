import React, {useState} from 'react'
import { Row, Col } from 'react-bootstrap';

//Component
import Navbar from "../../Components/Navbar/Navbar";
import ModalPopUp from '../../Components/Modals/Modals';

//CSS
import "./Modal.css";

function Chart() {

    const [inactive, setInactive] = useState(false);

    //Show modals
    const [showModalDelete, setShowModalDelete] = useState(false)
    const [showModalWarning, setShowModalWarning] = useState(false)
    const [showModalEdit, setShowModalEdit] = useState(false)
    const [showModalView, setShowModalView] = useState(false)

  return (
    <div className='page'>
        <Navbar
            onCollapse={(inactive) => {
            setInactive(inactive)
            }}
            active={'MANAGE'} 
        />
        <div className={`container ${inactive ? "inactive" : "active"}`}>
        {/* First Row */}
            <Row>
                <Col xs='6'>
                    <h1 className='page-title left'>MODAL</h1>
                </Col>
            </Row>
            <hr className='hr-line'/>
            <Row>
                <Col xs="5">
                    <label className='text-label'>Open Modal Delete</label>
                    <Row>
                        <button className='add-btn' onClick= {() => setShowModalDelete(true)}>DELETE</button>
                    </Row>
                </Col>
                <Col xs="2"></Col>
                <Col xs="5">
                    <label className='text-label'>Open Modal Warning</label>
                    <Row>
                        <button className='add-btn' onClick= {() => setShowModalWarning(true)}>WARNING</button>
                    </Row>
                </Col>
            </Row> 
            <Row>
                <Col xs="5">
                    <label className='text-label'>Open Modal For Edit </label>
                    <Row>
                        <button className='add-btn' onClick= {() => setShowModalEdit(true)}>EDIT</button>
                    </Row>
                </Col>
                <Col xs="2"></Col>
                <Col xs="5">
                    <label className='text-label'>Open Modal For View</label>
                    <Row>
                        <button className='add-btn' onClick= {() => setShowModalView(true)}>VIEW</button>
                    </Row>
                </Col>
            </Row> 
        </div>
        <ModalPopUp
            type = "delete"
            show = {showModalDelete}
            handleClose = {() => setShowModalDelete(false)}
        />
        <ModalPopUp
            type = "warning"
            show = {showModalWarning}
            handleClose = {() => setShowModalWarning(false)}
        />
        <ModalPopUp
            type = "edit"
            show = {showModalEdit}
            handleClose = {() => setShowModalEdit(false)}
        />
        <ModalPopUp
            type = "view"
            show = {showModalView}
            handleClose = {() => setShowModalView(false)}
        />
    </div>
  )
}

export default Chart;