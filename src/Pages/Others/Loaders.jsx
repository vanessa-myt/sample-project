import React, {useState} from 'react'
import { Card, Col, Row } from 'react-bootstrap'
import ReactLoading from 'react-loading';
import Navbar from '../../Components/Navbar/Navbar';

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
  const [inactive, setInactive] = useState(true)
  return (
    <div className='page'>
        <Navbar
            onCollapse={(inactive) => {
            setInactive(inactive)
            }}
            active={'OTHERS'} 
        />
        <div className={`container ${inactive ? "inactive" : "active"}`}>
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
                            </Card.Body>
                        </Card>
                        
                    </Col>
                )
            })}
        </Row>
        </div>
    </div>
  )
}

export default Loaders