import React from 'react'
import { useState } from 'react'
import { Button, Col, Row } from 'react-bootstrap'
import SignatureCanvas from 'react-signature-canvas'
import Navbar from '../../Components/Navbar/Navbar'

function SignatureCanvasComponent() {
    var sigPad = {}
    const [inactive, setInactive] = useState(true)

    function handleCanvasClear(){
        sigPad.clear()
    }
    return (
        <div className='page'>
            <Navbar
                onCollapse={(inactive) => {
                setInactive(inactive)
                }}
                active={'SIGNATURE CANVAS'} 
            />
            <div className={`container ${inactive ? "inactive" : "active"}`}>
            {/* First Row */}
                <Row>
                    <Col xs='6'>
                        <h1 className='page-title left'>SIGNATURE CANVAS</h1>
                    </Col>
                    
                </Row>
                <hr className='hr-line'/>
                <Row>
                    <Col xs='12'>
                        <SignatureCanvas penColor='black'
                            canvasProps={{width: 1000, height: 500, className: 'sigCanvas sig-canvas'}}
                            // style={{background:'red !important'}}
                            // backgroundColor={'rgba(255,219,201,0)'} 
                            ref={(ref) => { sigPad = ref }}/>
                    </Col>
                  
               </Row>
                <Row>
                    <Col xs='12'>
                        <Button onClick={handleCanvasClear}>Clear</Button>
                    </Col>
                  
               </Row>
            </div>
        </div>
      )
}

export default SignatureCanvasComponent