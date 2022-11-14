import React, {useState} from 'react'
import { Row, Col } from 'react-bootstrap';

//CSS
import '../Forms/Form.css';

//Component
import Navbar from "../../Components/Navbar/Navbar";

function Form() {

    const [inactive, setInactive] = useState(false);

//FileUpload Function
    const [file, setFile] = useState();
    const [array, setArray] = useState([]);
    const [showModal, setShowModal] = useState(false);
    const [selected, setSelected] = useState(false);

  const fileReader = new FileReader();

  const handleOnChange = (e) => {
    setFile(e.target.files[0]);
    setSelected(true);
    setShowModal(true);
  };

  const csvFileToArray = (string) => {
    const csvHeader = string.slice(0, string.indexOf("\n")).split(",");
    const csvRows = string.slice(string.indexOf("\n") + 1).split("\n");

    const array = csvRows.map((i) => {
      const values = i.split(",");
      const obj = csvHeader.reduce((object, header, index) => {
        if (header != undefined && values[index] != undefined) {
          header = header.replaceAll('"', "");
          header = header.trim();
          object[header] = values[index].trim();
        } else {
          object[header] = values[index];
        }
        return object;
      }, {});
      return obj;
    });

    array.pop();

    setArray(array);
  };

  console.log(array);

  const handleOnSubmit = (e) => {
    e.preventDefault();
    if (file) {
      fileReader.onload = function (event) {
        const text = event.target.result;
        csvFileToArray(text);
      };

      fileReader.readAsText(file);
      alert.success("CONVERTED");
    }
  };

  return (
    <div className='page'>
        <Navbar
            onCollapse={(inactive) => {
            setInactive(inactive)
            }}
            active={'MANAGE'} 
        />
        <div className={`page-container ${inactive ? "inactive" : "active"}`}>
        {/* First Row */}
            <Row>
                <h1 className='page-title-edit left'>FILE UPLOAD</h1>
            </Row>
            <hr className='hr-line'/>
            <Row>
                <Col xs='5' className='left'>
                    <input type="file" 
                        className='form-input-upload' 
                        id={"csvFileInput"}
                      accept={".csv"}
                      onChange={handleOnChange}></input>
                </Col>
                <Col xs='2' className='left'>
                    <button className='add-btn'>UPLOAD</button>
                </Col>
            </Row>
            <Row>
            {/* {fileData()} */}
            </Row>
        </div>
    </div>
  )
}

export default Form;