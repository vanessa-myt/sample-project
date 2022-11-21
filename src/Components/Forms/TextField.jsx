import React from 'react'
import { Form, Row, Col } from 'react-bootstrap'

function TextField({required=false, formLabel, size, placeholder}) {
  return (
    <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
            <Row>
                <Col sm={4}>
                    <Form.Label className='p-1'>
                        {formLabel}
                        {required && <span className='badge'>*</span>}
                    </Form.Label>
                </Col>
                <Col sm={6}>
                    <Form.Control type="text" placeholder={placeholder} size={size}/>
                </Col>
            </Row>
        </Form.Group>
    </Form>
    
  )
}

export default TextField