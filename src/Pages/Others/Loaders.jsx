import React from 'react'
import { Card, Col, Row } from 'react-bootstrap'
import ReactLoading from 'react-loading';

import "./Others.css"

const loadersList = [
    {
      prop: "balls",
    },
    {
      prop: "bars",
    },
    {
      prop: "bubbles",
    },
    {
      prop: "cubes",
    },
    {
      prop: "cylon",
    },
    {
      prop: "spin",
    },
    {
      prop: "spinningBubbles",
    },
    {
      prop: "spokes",
    }
  ];

function Loaders() {
  return (
    <div className='p-5'>
        <div className='header-label'>LOADERS</div>
        <hr/>
        <Row>
            {loadersList.map(data=>{
                return (
                    <Col sm={3} className='p-2 align-w-center'>
                        <Card>
                            <Card.Header className='card-header'>{data.prop.toUpperCase()}</Card.Header>
                            <Card.Body>
                                <ReactLoading type={data.prop} color="#5BC9E2" height={100} width={50} className="react-loader" />
                                {/* <Card.Title>Special title treatment</Card.Title>
                                <Card.Text>
                                With supporting text below as a natural lead-in to additional content.
                                </Card.Text>
                                <Button variant="primary">Go somewhere</Button> */}
                            </Card.Body>
                        </Card>
                        
                    </Col>
                )
            })}
        </Row>
    </div>
  )
}

export default Loaders