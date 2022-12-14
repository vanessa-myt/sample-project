import React from 'react'
import { Form, Row, Col } from 'react-bootstrap'
import Select from 'react-select'

import "./Forms.css"

function MYTSelect({required, type, formLabel, size, options, searchable}) {
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
                        {searchable ?
                        <Select options={options} size={size}/>
                        :
                        <Form.Select size={size}>
                            <option defaultValue>Select</option>
                            {options.map(data=>{
                                return (
                                    <option value={data.value}>{data.label}</option>
                                )
                            })}
                        </Form.Select>
                        }
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
                <Form.Select size={size}>
                    <option defaultValue>Select</option>
                    {options.map(data=>{
                        return (
                            <option value={data.id}>{data.name}</option>
                        )
                    })}
                </Form.Select>
            </Form.Group>
           </>
        }
    </Form>
    
  )
}

export default MYTSelect