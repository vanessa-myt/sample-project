import React from 'react'
import { Form, Row, Col } from 'react-bootstrap'

import "./Forms.css"

function MYTTextArea({required, type, formLabel, size, placeholder}) {
  return (
    <Form>
        {type==="inline" ?
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Row>
                    <Col sm={4}>
                        <Form.Label className='p-1 form-label align-left'>
                            {formLabel}
                            {required && <span className='badge'>*</span>}
                        </Form.Label>
                    </Col>
                    <Col sm={6}>
                        <textarea type="text" className="form-control" placeholder={placeholder} size={size}></textarea>
                    </Col>
                </Row>
            </Form.Group>
            :
           <>
             <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label className='align-left ml-2 form-label'>
                    {formLabel}
                    {required && <span className='badge'>*</span>}
                </Form.Label>
                <textarea type="text" className="form-control" placeholder={placeholder} size={size}></textarea>
            </Form.Group>
           </>
        }
    </Form>
    
  )
}

export default MYTTextArea