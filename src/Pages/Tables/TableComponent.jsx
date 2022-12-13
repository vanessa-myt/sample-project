import React, {useState} from 'react'
import { Row, Col } from 'react-bootstrap';

//CSS
import '../Forms/Form.css';
import '../../Pages/Dashboard/Dahsboard.css';
//Images
import Search from "../../Assets/Dashboard/search.png";
import User from "../../Assets/Dashboard/user.png";
//Component
import Navbar from "../../Components/Navbar/Navbar";
import Table from '../../Components/Table/Table';

const sampleData = [
    {employee_id:"324325", name:"Wednesday Addams", position:"Front-End Developer", salary:"100000", date_started:"12/12/2022"},
    {employee_id:"574574", name:"Xavier Thorpe", position:"Back-End Developer", salary:"100000", date_started:"12/28/2022"}
]

function TableComponent() {

    const [inactive, setInactive] = useState(false);

  return (
    <div className='page'>
        <Navbar
            onCollapse={(inactive) => {
            setInactive(inactive)
            }}
            active={'TABLES'} 
        />
        <div className={`container ${inactive ? "inactive" : "active"}`}>
            <Row>
                <Col xs='6'>
                    <h1 className='page-title left'>TABLES</h1>
                </Col>
            </Row>
            <hr className='hr-line'/>
            <Row>
            <div className="below">
                        {/* table */}
                        <Table
                            tableHeaders={[
                                "EMPLOYEE #",
                                "NAME",
                                "POSITION",
                                "SALARY"
                            ]}
                            headerSelector={[
                                "employee_id",
                                "name",
                                "position",
                                "salary"
                            ]}
                            tableData={sampleData}
                            showLoader={false}
                        />
                    </div>
            </Row>
        </div>
    </div>
  )
}

export default TableComponent;