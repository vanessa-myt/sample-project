import React from 'react'
import { Button, Col, InputGroup, Dropdown, DropdownButton } from 'react-bootstrap'

import "./Buttons.css"

function MYTButtonSelect({size, options}) {
  return (
    <Col md={4} className="mb-2">
        <InputGroup className="mb-3" size={size}>
            <DropdownButton
            variant="outline-secondary"
            title="Dropdown"
            id="input-group-dropdown-1"
            >
                <Dropdown.Item href="#">Action</Dropdown.Item>
                <Dropdown.Item href="#">Another action</Dropdown.Item>
                <Dropdown.Item href="#">Something else here</Dropdown.Item>
                <Dropdown.Item href="#">Separated link</Dropdown.Item>
            </DropdownButton>
        </InputGroup>
    </Col>
  )
}

export default MYTButtonSelect