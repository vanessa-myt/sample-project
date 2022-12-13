// ------SAMPLE CALLS------

import { getBranch, getKey, getToken, getUser } from "../Utils/Common";
import { getAPICall, postAPICallwithFile, putAPICall } from "./axiosMethodCalls";


//POST API -- append a new data to the db
export const loginUser = async (username,password,branch_code) => {
    try {
        const response = await postAPICall(process.env.REACT_APP_LINK + 'login', {
            branch_code: branch_code,
            username: username,
            password: password,
        });
        return ({data:response.data});   
    } catch (error) {
        return ({error: error.response});
    }
}

//POST API WITH FILE PAYLOAD
export const claimPickup = async (data) => {
    try {
        var formData = new FormData();
        formData.append("requester", getUser())
        formData.append("token", getToken().replace(/['"]+/g, ''))
        formData.append("api_key",getKey().replace(/['"]+/g, ''))
        formData.append("current_branch",getBranch().replace(/['"]+/g, ''))

        formData.append("claimed_by",data.claimed_by)
        formData.append("claim_remarks_1",data.claim_remarks_1)
        formData.append("claim_remarks_2",data.claim_remarks_2)
        formData.append("claim_remarks_3",data.claim_remarks_3)
        formData.append("claim_img",data.claim_img[0])
        formData.append("tracking_number",data.tracking_number)

        const response = await postAPICallwithFile( process.env.REACT_APP_LINK + 'pudo_transactions/pickup_claim', 
        formData
        );
        return ({data:response.data});   
    } catch (error) {
        return ({error: error.response});
    }
  }

//PUT API CALL -- used to update data
export const cancelWholeOrder = async (id) => {
    try {
        const response = await putAPICall(
            process.env.REACT_APP_LINK + "orders/mark_cancel/" + id,
            {
                updated_by: getUser(),
                token: getToken(),
            }
        );
        return { data: response.data };
    } catch (error) {
        return { error: error.response };
    }
};

//GET API CALL -- used to retrieve data from db
export const getEmployee = async (id) => {
    try {
        const response = await getAPICall(process.env.REACT_APP_LINK + "employees/get_employee", {
            requester: getUser(),
            token: getToken(),
            employee_id: id,
        })
        return { data: response.data }
    } catch (error) {
        return { error: error.response }
    }
}