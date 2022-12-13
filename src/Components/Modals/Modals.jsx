import React, { useState, useRef } from "react";
import { Row, Col } from "react-bootstrap";

//Images
import warning from "../../Assets/Modal/warning.png";

//css
import "../../Pages/Modal/Modal.css";


const ModalPopUp = ({type,show,handleClose}) => {
  const showHideClassName = show
    ? "modal-pop display-block"
    : "modal-pop display-none";


  if (type === "delete") {
    return (
      <div className={showHideClassName}>
        <section className="modal-mains modal-reset">
          <div className="modal-cont-header d-flex justify-content-center">
            <div className="modal-header-label">DELETE</div>
          </div>
          <hr className="modal-line" />
          <div className="modal-content-body">
            <Row className="">
              <Row className='mt-4 mb-4'>
                <label className="label">
                  Are you sure want to delete ME?.
                </label>
              </Row>
              <hr className="modal-line" />
              <div className="mt-2 right d-flex justify-content-end">
                  <button type="button" className="add-btn me-2">
                    DELETE
                  </button>
                
                <button type="button" className="cancel-btn ms-0" onClick = {handleClose}>
                  CANCEL
                </button>
              </div>
            </Row>
          </div>
        </section>
      </div>
    );
  }

  if (type === "warning") {
    return (
      <div className={showHideClassName}>
        <section className="modal-mains modal-reset">
          <div className="modal-cont-header d-flex justify-content-center">
            <div className="modal-header-label">DELETE</div>
          </div>
          <hr className="modal-line" />
          <div className="modal-content-body">
            <Row className="">
              <Row className='mt-4 mb-4 center'>
                <img src={warning} className="warning-icon"></img>
                <label className="label">
                  Warning! You are not allowed to continue processing.
                </label>
              </Row>
              <hr className="modal-line" />
              <div className="mt-2 right d-flex justify-content-end">
                <button type="button" className="cancel-btn ms-0" onClick = {handleClose}>
                    CLOSE
                </button>
              </div>
            </Row>
          </div>
        </section>
      </div>
    );
  }

  if (type === "edit") {
    return (
      <div className={showHideClassName}>
        <section className="modal-mains modal-reset">
          <div className="modal-cont-header d-flex justify-content-center">
            <div className="modal-header-label">UPDATE</div>
          </div>
          <hr className="modal-line" />
          <div className="modal-content-body">
            <Row className="">
              <Row className='mt-4 mb-4 center'>
                <label className="label">
                  ASA NAMAN ANG FORMS BAN HAHAHAH.
                </label>
              </Row>
              <hr className="modal-line" />
              <div className="mt-2 right d-flex justify-content-end">
                <button type="button" className="add-btn me-2">
                    EDIT
                </button>
                <button type="button" className="cancel-btn ms-0" onClick = {handleClose}>
                    CLOSE
                </button>
              </div>
            </Row>
          </div>
        </section>
      </div>
    );
  }

  if (type === "view") {
    return (
      <div className={showHideClassName}>
        <section className="modal-mains modal-reset">
          <div className="modal-cont-header d-flex justify-content-center">
            <div className="modal-header-label">VIEW</div>
          </div>
          <hr className="modal-line" />
          <div className="modal-content-body">
            <Row className="">
              <Row className='mt-4 mb-4 center'>
                <label className="label">
                  BEST FRIENDS CHECK!
                </label>
              </Row>
              <Row className='mt- mb-4 center'>
                <Col xs='5 left'>
                <label className="label ms-5">
                    NAME
                </label>
                </Col>
                <Col xs='3 center'>
                <label className="label">
                    AGE
                </label>
                </Col>
                <Col xs='4 center'>
                <label className="label">
                    STATUS
                </label>
                </Col>
              </Row>
              <Row className='mt- mb-4 center'>
                <Col xs='5 left'>
                <label className="label ms-5">
                    Novel Palconit
                </label>
                </Col>
                <Col xs='3 center'>
                <label className="label">
                   23
                </label>
                </Col>
                <Col xs='4 center'>
                <label className="label">
                    Single
                </label>
                </Col>
              </Row>
              <Row className='mt- mb-4 center'>
                <Col xs='5 left'>
                <label className="label ms-5">
                    Vanessa Ibale
                </label>
                </Col>
                <Col xs='3 center'>
                <label className="label">
                   22
                </label>
                </Col>
                <Col xs='4 center'>
                <label className="label">
                    Taken
                </label>
                </Col>
              </Row>
              <Row className='mt- mb-4 center'>
                <Col xs='5 left'>
                <label className="label ms-5">
                    Donna Cuesta
                </label>
                </Col>
                <Col xs='3 center'>
                <label className="label">
                   23
                </label>
                </Col>
                <Col xs='4 center'>
                <label className="label">
                    Single
                </label>
                </Col>
              </Row>
              <Row className='mt- mb-4 center'>
                <Col xs='5 left'>
                <label className="label ms-5">
                    Lalaine Labadan
                </label>
                </Col>
                <Col xs='3 center'>
                <label className="label">
                   23
                </label>
                </Col>
                <Col xs='4 center'>
                <label className="label">
                    Taken
                </label>
                </Col>
              </Row>
              <hr className="modal-line" />
              <div className="mt-2 right d-flex justify-content-end">
                <button type="button" className="cancel-btn ms-0" onClick = {handleClose}>
                    CLOSE
                </button>
              </div>
            </Row>
          </div>
        </section>
      </div>
    );
  }

};

export default ModalPopUp;
