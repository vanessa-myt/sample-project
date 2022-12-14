import {handleValidationChange} from '../CommonValidation';

export const validateUsers = (data, setIsError) => {

    var isValid = true;

    if(data.name === "" ) {
      handleValidationChange("name", true, setIsError);
      isValid = false;
    } else {
      handleValidationChange("name", false, setIsError); 
    }

    if(data.birthdate === "" ) {
        handleValidationChange("birthdate", true, setIsError);
        isValid = false;
      } else {
        handleValidationChange("birthdate", false, setIsError); 
      }

      if(data.gender === "" ) {
        handleValidationChange("gender", true, setIsError);
        isValid = false;
      } else {
        handleValidationChange("gender", false, setIsError); 
      }

      if(data.fund_source === "" ) {
        handleValidationChange("fund_source", true, setIsError);
        isValid = false;
      } else {
        handleValidationChange("fund_source", false, setIsError); 
      }

      if(data.role === "" ) {
        handleValidationChange("role", true, setIsError);
        isValid = false;
      } else {
        handleValidationChange("role", false, setIsError); 
      }

    return isValid
  
}