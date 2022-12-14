import React from 'react'
import { Button, Col } from 'react-bootstrap'

import "./Buttons.css"

function MYTClearBtn({size, obj}) { 

  return (
    <Col md={4} className="mb-2">
        <Button className='action-btn clear' size={size} onClick={obj}>Clear</Button>
    </Col>
  )
}

export default MYTClearBtn