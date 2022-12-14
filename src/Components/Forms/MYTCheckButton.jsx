import React from 'react'
import { Form, Row, Col } from 'react-bootstrap'

import "./Forms.css"

function MYTCheckButton({required=true, type, formLabel, labels=[]}) {
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
                    {['checkbox'].map((type) => (
                    <div key={`inline-${type}`} className="mb-3 align-left justify-content-between">
                    {labels.map((data,key)=>{
                        return (  
                            <Form.Check
                            inline
                            label={data.label}
                            name="group1"
                            type={type}
                            id={`inline-${type}-${key}`}
                            />
                        )
                    })}
                    </div>
                ))}
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
                <div className='align-left'>
                {['checkbox'].map((type) => (
                    <div key={`block-${type}`} className="mb-3">
                    {labels.map((data,key)=>{
                        return (  
                            <Form.Check
                            inline
                            label={data.label}
                            name="group1"
                            type={type}
                            id={`block-${type}-${key}`}
                            />
                        )
                    })}
                    </div>
                ))}
                </div>
            </Form.Group>
           </>
        }
    </Form>
    
  )
}

export default MYTCheckButton