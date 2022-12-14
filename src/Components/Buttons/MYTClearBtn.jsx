import React from 'react'
import { Button, Col } from 'react-bootstrap'

import "./Buttons.css"

function MYTClearBtn({size, actionFx}) {
  return (
    <Col md={4} className="mb-2">
        <Button className='action-btn clear' size={size} onClick={actionFx}>Clear</Button>
    </Col>
  )
}

export default MYTClearBtn