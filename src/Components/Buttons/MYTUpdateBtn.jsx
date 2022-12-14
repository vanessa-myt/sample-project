import React from 'react'
import { Button, Col } from 'react-bootstrap'
import ReactLoading from "react-loading"

import "./Buttons.css"

function MYTUpdateBtn({size, actionFx, isClicked}) {
  return (
    <Col md={4} className="mb-2">
        {
            isClicked ?
            <Button className='action-btn update loader' size={size}>
                <ReactLoading type={"balls"} height={20} width={25} color="#fff" />
            </Button>
            :
            <Button className='action-btn update' size={size} onClick={actionFx}>Update</Button>
        }
    </Col>
  )
}

export default MYTUpdateBtn