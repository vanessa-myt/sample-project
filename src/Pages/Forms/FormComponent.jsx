import React, {useState} from 'react'
import { Row, Col, Form } from 'react-bootstrap';

//VALIDATIONS
import { validateUsers } from '../../Helpers/Validations/FormValidation/FormValidation';

//CSS
import '../Forms/Form.css';

//Images
import Search from "../../Assets/Dashboard/search.png";

//INputError
import InputError from '../../Components/InputError/InputError';

//Component
import Navbar from "../../Components/Navbar/Navbar";
import TextField from '../../Components/Forms/MYTTextField';
import MYTTextField from '../../Components/Forms/MYTTextField';
import MYTRadioButton from '../../Components/Forms/MYTRadioButton';
import MYTCheckButton from '../../Components/Forms/MYTCheckButton';
import MYTDateField from '../../Components/Forms/MYTDateField';
import MYTTimeField from '../../Components/Forms/MYTTimeField';
import MYTDateTimeField from '../../Components/Forms/MYTDateTimeField';
<<<<<<< HEAD
import MYTSelect from '../../Components/Forms/MYTSelect';
import MYTTextArea from '../../Components/Forms/MYTTextArea';
import MYTNumberField from '../../Components/Forms/MYTNumberField';
=======
import ModalPopUp from '../../Components/Modals/Modals';
>>>>>>> 3fde5425bb3cce7c0d2115211874d904ddc0d62a

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
    const [isClicked, setIsClicked] = useState(false)

    const [showModalView, setShowModalView] = useState(false)

    const [addUser, setAddUser] = useState({
        name: "",
        birthdate: "",
        gender: " ",
        fund_source: "",
    })
    
    //REQUIRED ERROR HANDLING
    const [isError, setIsError] = useState({
        name: false,
        birthdate: false,
        gender: false,
        fund_source: false,
      });

    //EDIT or UPDATE USER
    const handleAddChange = (e) => {
        const { name, value } = e.target;
        setAddUser((prevState) => ({
          ...prevState,
          [name]: value,
        }));
      }

      //Create API Discount
    async function create(){
        if (validateUsers(addUser, setIsError)) {
          setIsClicked(true);
          setShowModalView(true);
        //   const response = await createDiscount(addUser);
        //   console.log(response)
        //   if (response.data) {
        //     toast.success("Successfully Created Discount!", {style: toastStyle(),});
        //      handleCloseAddDiscountModal();
        //     refreshPage();
        //   } else {
        //     toast.error(response.error.data.messages.error, {style: toastStyle(),});
        //   }
        } else {
        //   toast.error("An error has occured!", {style: toastStyle(),});
        }
      }

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
                            onChange={(e) => handleAddChange(e)} 
                        />
                        <InputError  isValid={isError.name} message={"Input is Required"}/>
                        <MYTTextField
                            type={`inline`}
                            formLabel={`Email`}
                            size={`sm`}
                            placeholder={`Enter Email here`}
                            onChange={(e) => handleAddChange(e)}
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
                            onChange={(e) => handleAddChange(e)}
                            required
                        />
                        <InputError  isValid={isError.gender} message={"Input is Required"}/>
                        <MYTCheckButton
                            type={`inline`}
                            formLabel={`Fund Source`}
                            labels={sampleLabelsCheckbox}
                            onChange={(e) => handleAddChange(e)}
                            required
                        />
                        <InputError  isValid={isError.fund_source} message={"Input is Required"}/>
                         <MYTDateField 
                            required
                            type={`inline`}
                            formLabel={`Date of Birth`}
                            size={`sm`}
                            onChange={(e) => handleAddChange(e)}
                        />
                        <InputError  isValid={isError.birthdate} message={"Input is Required"}/>
                         <MYTTimeField 
                            type={`inline`}
                            formLabel={`Availability`}
                            size={`sm`}
                            onChange={(e) => handleAddChange(e)}
                        />
                         <MYTDateTimeField 
                            type={`inline`}
                            formLabel={`Time-In`}
                            size={`sm`}
                            onChange={(e) => handleAddChange(e)}
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
               <Row>
                    <button className='save-btn' onClick={create}>ADD</button>
               </Row>
            </div>
            <ModalPopUp
                type = "view"
                show = {showModalView}
                handleClose = {() => setShowModalView(false)}
            />
        </div>
      )

}

export default FormComponent;