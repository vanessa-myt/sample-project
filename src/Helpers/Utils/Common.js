import { logoutUser } from '../API/authApi';


/***************************
 * Common Utilities
 ***************************/
export const numberWithCommas = (number) => {
    if(!number) {
        return
    }
    
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

//Common Utility Functions

export const refreshPage = () => {
    window.location.reload();
}

export const getTime = (date) => {
    return  date.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true })
}

export const subtractMonths = (numOfMonths, date = new Date()) => {
   date.setMonth(date.getMonth() - numOfMonths);
   return date.toISOString().split('T')[0];
}

export const getTodayDate = () => {
    return new Date();
}

export const getTodayDateISO = () => {
    let date =  new Date();
    return date.toISOString().split('T')[0]
}

export const getAge = (dateString) => {
    var today = new Date();
    var birthdate = new Date(dateString);
    var age = today.getFullYear() - birthdate.getFullYear();
    var m = today.getMonth() - birthdate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthdate.getDate())) {
        age--;
    }
    return age;
}

export const formatPrice = (p)=> {
    var result = parseFloat(p).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
   // console.log(`passed = ${p} | res = ${result} --- typeof_passed = ${typeof(p)} typeof_result = ${typeof(result)}`);
    return result;
};

export const formatDate = (date) => {
    var formatDate = new Date(date);
    var stringDate = formatDate.toDateString().split(" ");
    return stringDate[1] + " " + stringDate[2] + ", " + stringDate[3]
}

export const formatDateWithTime = (date) => {
    var formatDate = new Date(date);
    var stringDate = formatDate.toDateString().split(" ");
    return stringDate[1] + " " + stringDate[2] + ", " + stringDate[3] + " " + formatDate.toLocaleTimeString().replace(/(.*)\D\d+/, "$1")
}

export const formatDateNoTime = (date) => {
    var formatDate = new Date(date);
    var stringDate = formatDate.toDateString().split(" ");

    return stringDate[1] + " " + stringDate[2] + ", " + stringDate[3];
}

export const formatDateSlash = (date) => {
    var stringDate = date.split("-")

    return stringDate[1] + "/" + stringDate[2] + "/" + stringDate[0]
}

export const formatMDY = (date) => {
    // console.log(date)
    var stringDate = date.split("-")
    // console.log(stringDate)
    return stringDate[1] + "-" + stringDate[2] + "-" + stringDate[0]
}

export const validateEmail = (email) => {
    if(email === "") {
        return true
    } else {
        var filter = /^\s*[\w\-\+_]+(\.[\w\-\+_]+)*\@[\w\-\+_]+\.[\w\-\+_]+(\.[\w\-\+_]+)*\s*$/;
        return String(email).search (filter) != -1;
    }
};

export const validateContact = (num) => {
    var mobileFilter = /((^(\+)(\d){12}$)|(^\d{11}$))/;
    var telFilter = /^[0-9]+(-[0-9]+)+$/;

    if(String(num).search(mobileFilter) != -1 || String(num).search(telFilter) != - 1) {
        return true
    } else {
        return false
    }
}

export const formatNum = (num) => {
    return parseFloat(Math.round(num * 100) / 100).toFixed(2);
}




/***************************
 * Local Storage Utilities
 ***************************/


//return user data from local storage
export const getUser = () => {
    const userStr = localStorage.getItem('user');
    if(userStr) return JSON.parse(userStr);
    else return null;
}

//return user name from local storage
export const getName = () => {
    const userStr = localStorage.getItem('name');
    
    if(userStr) return JSON.parse(userStr);
    else return null;
}

//return user type from local storage
export const getType = () => {
    const userStr = localStorage.getItem('type');
    if(userStr) return JSON.parse(userStr);
    else return null;
}

//return user role from local storage
export const getRole = () => {
    const userStr = localStorage.getItem('role');
    if(userStr) return JSON.parse(userStr);
    else return null;
}

//return user city from local storage
export const getCity = () => {
    const userStr = localStorage.getItem('city');
    if(userStr) return JSON.parse(userStr);
    else return null;
}

//return user region from local storage
export const getRegion = () => {
    const userStr = localStorage.getItem('region');
    if(userStr) return JSON.parse(userStr);
    else return null;
}

//return role id from local storage
export const getRoleId = () => {
    return localStorage.getItem('role_id') || null;
}

//return token from local storage
export const getToken = () => {
    return localStorage.getItem('token') || null;
}

//return api key from local storage
export const getKey = () => {
    return localStorage.getItem('api_key') || null;
}

//return current branch from local storage
export const getBranch = () => {
    return localStorage.getItem('branch') || null;
}

//return branch type from local storage
export const getBranchType = () => {
    return JSON.parse(localStorage.getItem('branch_type')) || null;
}

//return branch name from local storage
export const getBranchName = () => {
    return JSON.parse(localStorage.getItem('branch_name')) || null;
}

//return token expiry from local storage
export const getTokenExpiry = () => {
    return localStorage.getItem('token_expiry') || null;
}

//return services from local storage
export const getUserServices = () => {
    return localStorage.getItem('services') || null;
}

//remove token from local storage
export const removeUserSession = () => {
    logoutUser();
}

//set the token and user from local storage
export const setUserSession = (token, api_key, user) => {
    localStorage.setItem('token', token);
    localStorage.setItem('api_key', api_key);
    localStorage.setItem('user', JSON.stringify(user));
}