import {handleValidationChange} from '../CommonValidation';

export const validateAddLoyaltyType = (data, setIsError) => {

    var isValid = true;

    if(data.name === "" ) {
      handleValidationChange("name", true, setIsError);
      isValid = false;
    } else {
      handleValidationChange("name", false, setIsError); 
    }

    if(data.address === "" ) {
        handleValidationChange("address", true, setIsError);
        isValid = false;
      } else {
        handleValidationChange("address", false, setIsError); 
      }

    return isValid
  
}