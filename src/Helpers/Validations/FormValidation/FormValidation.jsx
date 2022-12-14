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

      if(data.email === "" ) {
        handleValidationChange("email", true, setIsError);
        isValid = false;
      } else {
        handleValidationChange("email", false, setIsError); 
      }

      if(data.availability === "" ) {
        handleValidationChange("availability", true, setIsError);
        isValid = false;
      } else {
        handleValidationChange("availability", false, setIsError); 
      }

    return isValid
  
}