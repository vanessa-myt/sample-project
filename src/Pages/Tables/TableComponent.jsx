import React, { useState } from "react";
import { Row, Col, Button, Form } from "react-bootstrap";
import {
  formatDateWithTime,
  formatMDY,
  numberWithCommas,
} from "../../Helpers/Utils/Common";
//CSS
import "../Forms/Form.css";
import "../../Pages/Dashboard/Dashboard.css";
//Images
import Search from "../../Assets/Dashboard/search.png";
import User from "../../Assets/Dashboard/user.png";
//Component
import Navbar from "../../Components/Navbar/Navbar";
import Table from "../../Components/Table/Table";
import ExportPDF from "../../Components/Exports/ExportPDF";
import ExportCSV from "../../Components/Exports/ExportCSV";
import MYTSelect from "../../Components/Forms/MYTSelect";

const sampleData = [
  {
    employee_id: "324325",
    name: "Wednesday Addams",
    position: "Front-End Developer",
    salary: "100000",
    date_started: "12/12/2022",
  },
  {
    employee_id: "574574",
    name: "Xavier Thorpe",
    position: "Back-End Developer",
    salary: "100000",
    date_started: "12/28/2022",
    action: "delete",
  },
];

function TableComponent() {
  const [inactive, setInactive] = useState(false);
  const [option, setOption] = useState("Select");

  function ActionBtn() {
    return (
      <Form.Select size="sm" aria-label="Default select example">
        <option>Select</option>
        <option>Add</option>
        <option>Edit</option>
        <option>Delete</option>
      </Form.Select>
    );
  }

  function ViewBtn() {
    return <Button size="sm">View</Button>;
  }

  return (
    <div className="page">
      <Navbar
        onCollapse={(inactive) => {
          setInactive(inactive);
        }}
        active={"TABLES"}
      />
      <div className={`container ${inactive ? "inactive" : "active"}`}>
        <Row>
          <Col xs="6" className="mt-3">
            <h1 className="page-title left">TABLES</h1>
          </Col>
          <Col xs="6" className="align-right" style={{ textAlign: "right" }}>
            <ExportPDF
              type={""}
              name={"EmployeeListPDF"}
              data={sampleData}
              header={Object.keys(sampleData[0])}
            />
            <br />
            <ExportCSV
              name={"EmployeeListCSV"}
              data={sampleData}
              headers={Object.keys(sampleData[0])}
            />
          </Col>
        </Row>
        <hr className="hr-line" />
        <Row>
          <div className="below">
            {/* table */}
            <Table
              tableHeaders={[
                " ",
                "EMPLOYEE #",
                "NAME",
                "POSITION",
                "SALARY",
                "ACTIONS",
              ]}
              headerSelector={["", "employee_id", "name", "position", "salary"]}
              tableData={sampleData}
              ActionBtn={ActionBtn}
              ViewBtn={ViewBtn}
              showLoader={false}
            />
          </div>
        </Row>
      </div>
    </div>
  );
}

export default TableComponent;
