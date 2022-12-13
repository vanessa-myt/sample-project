import React, {useState} from 'react'
import { Row, Col } from 'react-bootstrap';
import ModalPopUp from '../../Components/Modals/Modals';
//CSS
import '../FileUpload/FileUpload.css';

//Component
import Navbar from "../../Components/Navbar/Navbar";

function Form() {

    const [inactive, setInactive] = useState(false);
    const inputRef = React.useRef(null);

//FileUpload Function
    const [file, setFile] = useState();
    const [array, setArray] = useState([]);
    const [showModal, setShowModal] = useState(false);
    const [selected, setSelected] = useState(false);
    const [showModalWarning, setShowModalWarning] = useState(false)


  const handleOnChange = (e) => {
    setFile(e.target.files[0]);
    setSelected(true);
    setShowModal(true);
  };

//initialize file reader
  const fileReader = new FileReader();
//function to convert csv file to array
  const csvFileToArray = (string) => {
    //for header
    const csvHeader = string.slice(0, string.indexOf("\n")).split(",");
    //for row
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

  //handle onClick to submit
  const handleOnSubmit = (e) => {
    e.preventDefault();
    if (file) {
      fileReader.onload = function (event) {
        const text = event.target.result;
        csvFileToArray(text);
      };
      fileReader.readAsText(file);
      setShowModalWarning(true)
      alert.success("CONVERTED");
    }
  };
/////////////////////////////////////////////////////////////////////////////////////////////////////////
  const [fileLength, setFileLength] = useState(0)
  const [fileName, setFileName] = useState("")

   // Convert file to base 64
   function convertToBase64(e){
    //read file
    // var selectedFile=document.getElementById("pdftobase64").files
    var selectedFile = e.target.files;
    // Check if file is empty
    if(selectedFile.length > 0){
      setFileLength(selectedFile.length)
      // select first file from list
      setFileName(selectedFile[0].name)
      var fileToLoad = selectedFile[0]
      //Read the file into base64
      var fileReader = new FileReader();
      var base64;
      fileReader.onload = function(fileLoadedEvent){
        base64 = fileLoadedEvent.target.result;
        setFile(base64)
        console.log(fileReader.result);
        setFile(fileReader.result)
      }
      fileReader.readAsDataURL(fileToLoad)
      console.log(fileToLoad)
      setShowModal(true)
    }
    else {
      setShowModal(true)
    };
    console.log(selectedFile)
  }

  //convert image to base64
  const [fileLengths, setFileLengths] = useState(0)
  const [fileNames, setFileNames] = useState("")

   // Convert file to base 64
   function convertImageToBase64(e){
    //read file
    // var selectedFile=document.getElementById("pdftobase64").files
    var selectedFile = e.target.files;
    // Check if file is empty
    if(selectedFile.length > 0){
      setFileLengths(selectedFile.length)
      // select first file from list
      setFileNames(selectedFile[0].name)
      var fileToLoad = selectedFile[0]
      //Read the file into base64
      var fileReader = new FileReader();
      var base64;
      fileReader.onload = function(fileLoadedEvent){
        base64 = fileLoadedEvent.target.result;
        setFile(base64)
        console.log(base64)
      }
      fileReader.readAsDataURL(fileToLoad)
      console.log(fileToLoad)
      setShowModalWarning(true)
    }
    console.log(selectedFile)
  }
  


////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  return (
    <div className='page'>
        <Navbar
            onCollapse={(inactive) => {
            setInactive(inactive)
            }}
            active={'FILE UPLOAD'} 
        />
        <div className={`container ${inactive ? "inactive" : "active"}`}>
        {/* First Row */}
            <Row>
                <h1 className='page-title pt-0 left'>FILE UPLOAD</h1>
            </Row>
            <hr className='hr-line'/>
            <Row>
              <label className='text-label left mb-4'>Convert to base64 pdf type</label>
                <Col xs='5' className='left'> 
                    <input 
                      ref={inputRef} 
                      type="file"                
                      id="pdftobase64"
                      name="pdftobase64" 
                      accept="application/pdf"
                      className="input-file-upload"
                      onChange={(e)=>convertToBase64(e)}
                    />
                </Col>
                <Col xs='2 mb-4' className='left'>
                    <button className='upload-btn'>UPLOAD</button>
                </Col>
            </Row>
            <Row>
              <hr className='hr-line'/>
            <Row>
              <label className='text-label left mb-4'>Convert to array and show data</label>
                <Col xs='5' className='left'>
                  <input
                    type={"file"}
                    id={"csvFileInput"}
                    accept={".csv"}
                    className="input-file-upload"
                    onChange={handleOnChange}
                    ref={inputRef}
                  />
                </Col>
                <Col xs='2' className='left mb-4'>
                    <button className='upload-btn' onClick={handleOnSubmit}>UPLOAD</button>
                </Col>
                <Row>
                <table>
                    {/* <thead>
                      <tr key={"header"}>
                        {header.map((key) => (
                          <th>{key}</th>
                        ))}
                      </tr>
                    </thead>*/}
                    <tbody> 
                      {array.map((item) => (
                        <tr key={item.id}>
                          {Object.values(item).map((val) => (
                            <td>{val}</td>
                          ))}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </Row>
            </Row>
            <hr className='hr-line'/>
            <Row>
              <label className='text-label left mb-4'>Convert to base64 Image type</label>
                <Col xs='5' className='left'> 
                    <input 
                      ref={inputRef} 
                      type="file"                
                      id="pdftobase64"
                      name="pdftobase64" 
                      accept={".png"}
                      className="input-file-upload"
                      onChange={(e)=>convertImageToBase64(e)}
                    />
                </Col>
                <Col xs='2 mb-4' className='left'>
                    <button className='upload-btn'>UPLOAD</button>
                </Col>
                {/* <Row>
                  <Col xs='center'>
                    <img src={file} className="upload-image-icon"/>
                  </Col>
                </Row> */}
            </Row>
            </Row>
        </div>
        <ModalPopUp
            type = "Base64"
            show = {showModalWarning}
            handleClose = {() => setShowModalWarning(false)}
            data = {file}
        />
        <ModalPopUp
            type = "Base64"
            show = {showModal}
            handleClose = {() => setShowModal(false)}
            data = {file}
        />
    </div>
  )
}

export default Form;