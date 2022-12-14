import React, {useState} from 'react'
import { Row, Col, Form } from 'react-bootstrap';

//CSS
import '../Forms/Form.css';

//Images
import Search from "../../Assets/Dashboard/search.png";

//Component
import Navbar from "../../Components/Navbar/Navbar";
import TextField from '../../Components/Forms/MYTTextField';
import MYTTextField from '../../Components/Forms/MYTTextField';
import MYTRadioButton from '../../Components/Forms/MYTRadioButton';
import MYTCheckButton from '../../Components/Forms/MYTCheckButton';
import MYTDateField from '../../Components/Forms/MYTDateField';
import MYTTimeField from '../../Components/Forms/MYTTimeField';
import MYTDateTimeField from '../../Components/Forms/MYTDateTimeField';
import MYTSelect from '../../Components/Forms/MYTSelect';
import MYTTextArea from '../../Components/Forms/MYTTextArea';
import MYTNumberField from '../../Components/Forms/MYTNumberField';

const sampleLabels = [
  {label:"Female"},
  {label:"Male"},
  {label:"Prefer not to Say"},
]

const sampleLabelsCheckbox = [
  {label:"Personal Savings"},
  {label:"Income"},
  {label:"Others"},
]

const sampleRoles = [
    {value:1, label:"Admin"},
    {value:2, label:"Manager"},
    {value:3, label:"Agent"},
]

function FormComponent() {

    const [inactive, setInactive] = useState(false);

    return (
        <div className='page'>
            <Navbar
                onCollapse={(inactive) => {
                setInactive(inactive)
                }}
                active={'FORMS'} 
            />
            <div className={`container ${inactive ? "inactive" : "active"}`}>
                <Row>
                    <Col xs='6'>
                        <h1 className='page-title left'>FORMS</h1>
                    </Col>
                </Row>
                <hr className='hr-line'/>
                <Row>
                    <Col md={8} className="mt-2">
                        <MYTTextField 
                            required
                            type={`inline`}
                            formLabel={`Name`}
                            size={`sm`}
                            placeholder={`Enter Name`}
                        />
                        <MYTTextField
                            type={`inline`}
                            formLabel={`Email`}
                            size={`sm`}
                            placeholder={`Enter Email here`}
                        />
                        <MYTNumberField
                            type={`inline`}
                            formLabel={`Mobile Number`}
                            size={`sm`}
                            placeholder={`09xxxxxxxxx`}
                            sideInput
                            sideInputType={`string`}
                            sideInputValue={`+63`}
                        />
                        <MYTRadioButton
                            type={`inline`}
                            formLabel={`Gender`}
                            labels={sampleLabels}
                        />
                        <MYTCheckButton
                            type={`inline`}
                            formLabel={`Fund Source`}
                            labels={sampleLabelsCheckbox}
                        />
                         <MYTDateField 
                            required
                            type={`inline`}
                            formLabel={`Date of Birth`}
                            size={`sm`}
                        />
                         <MYTTimeField 
                            type={`inline`}
                            formLabel={`Availability`}
                            size={`sm`}
                        />
                         <MYTDateTimeField 
                            type={`inline`}
                            formLabel={`Time-In`}
                            size={`sm`}
                        />
                        <MYTSelect
                            required
                            type={`inline`}
                            formLabel={`Role`}
                            size={`sm`}
                            options={sampleRoles}
                        />
                         <MYTTextArea
                            type={`inline`}
                            formLabel={`Remarks`}
                            size={`sm`}
                        />
                    </Col>

                    {/* <Col md={6}>
                        <MYTTextField 
                            required
                            type={`block`}
                            formLabel={`Email`}
                            size={`sm`}
                            placeholder={`Enter Email here`}
                        />
                        <MYTTextField 
                            required
                            type={`block`}
                            formLabel={`Name`}
                            size={`sm`}
                            placeholder={`Enter Name`}
                        />
                        <MYTRadioButton
                            type={`block`}
                            formLabel={`Gender`}
                            labels={sampleLabels}
                        />
                    </Col> */}
                   
               </Row>
            </div>
        </div>
      )

}

export default FormComponent;