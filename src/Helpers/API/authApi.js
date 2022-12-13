import {postAPICall } from './axiosMethodCalls';
import { getBranch, getUser, getKey, getToken, refreshPage } from '../Utils/Common';

/***************************
 * LOGIN
 ***************************/

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

/***************************
 * LOGOUT
 ***************************/

export const logoutUser = async () => {
    try {
        const response = await postAPICall(process.env.REACT_APP_LINK + 'logout', {
            requester: getUser(),
            current_branch: getBranch().replace(/['"]+/g, ''),
            api_key: getKey().replace(/['"]+/g, ''),
            token: getToken().replace(/['"]+/g, ''),
        });
        refreshPage();
        localStorage.removeItem('user'); 
        return response
    } catch (error) {
        refreshPage()
        localStorage.removeItem('user');
        return ({error: error.response});
    }
}