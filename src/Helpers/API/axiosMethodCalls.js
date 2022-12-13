import React from 'react';
import { Navigate } from 'react-router-dom';
import axios from 'axios';

let config = {
    headers: {
        "api-key" : process.env.REACT_APP_API_KEY,
        "Content-Type": "application/json",
    }
}

let fileconfig = {
    headers: {
        "api-key" : process.env.REACT_APP_API_KEY,
        "Content-Type": "multipart/form-data",
    }
}

// API Axios Get Call.
export const getAPICall = (url, data) => {
    return axios.get(url, data, config);
}

// API Axios Post Call.
export const postAPICall = (url, data) => {
    return axios.post(url, data, config);
}

// API Axios Post Call with File Config
export const postAPICallwithFile = (url, data) => {
    return axios.post(url, data, fileconfig);
}

// API Axios Put Call.
export const putAPICall = (url, data) => {
    return axios.put(url, data, config);
}
// API Axios Delete Call.
export const deleteAPICall = (url) => {
    return axios.delete(url,config);
}