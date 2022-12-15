import {postAPICall } from './axiosMethodCalls';
import {getUser, getKey, getToken, refreshPage } from '../Utils/Common';

/***************************
 * LOGIN
 ***************************/

 export const loginUser = async (username,password,branchcode) => {
    try {
        const response = await postAPICall(process.env.REACT_APP_LINK + 'login', {
            username: username,
            password: password,
            branch_code:branchcode
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