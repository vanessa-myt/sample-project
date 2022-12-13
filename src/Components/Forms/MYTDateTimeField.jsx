import React from 'react'
import { Form, Row, Col } from 'react-bootstrap'

import "./Forms.css"

function MYTDateTimeField({required, type, formLabel, size, placeholder}) {
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
                        <Form.Control type="datetime-local" placeholder={placeholder} size={size}/>
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
                <Form.Control type="datetime-local" placeholder={placeholder} size={size}/>
            </Form.Group>
           </>
        }
    </Form>
    
  )
}

export default MYTDateTimeField