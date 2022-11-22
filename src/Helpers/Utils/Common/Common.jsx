import { logoutUser } from "../../APICalls/authApi";
import moment from "moment";

/***************************
 * Common Utilities
 ***************************/
export const numberWithCommas = (number) => {
  if (!number) {
    return;
  }

  return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};

//Common Utility Functions

export const refreshPage = () => {
  window.location.reload();
};

export const getTime = (date) => {
  return date.toLocaleString("en-US", {
    hour: "numeric",
    minute: "numeric",
    hour12: true,
  });
};

export const subtractMonths = (numOfMonths, date = new Date()) => {
  date.setMonth(date.getMonth() - numOfMonths);
  return date.toISOString().split("T")[0];
};

export const getTodayDate = () => {
  return new Date();
};

export const getTodayDateISO = () => {
  let date = new Date();
  return date.toISOString().split("T")[0];
};

export const getAge = (dateString) => {
  var today = new Date();
  var birthdate = new Date(dateString);
  var age = today.getFullYear() - birthdate.getFullYear();
  var m = today.getMonth() - birthdate.getMonth();
  if (m < 0 || (m === 0 && today.getDate() < birthdate.getDate())) {
    age--;
  }
  return age;
};

export const formatDate = (date) => {
  //if date is null or empty string return nothin
  if (!date || date == "") {
    return "";
  }

  var formatDate = new Date(date);
  var stringDate = formatDate.toDateString().split(" ");

  return (
    stringDate[1] +
    " " +
    stringDate[2] +
    ", " +
    stringDate[3] +
    " " +
    formatDate.toLocaleTimeString().replace(/(.*)\D\d+/, "$1")
  );
};

export const formatDateNoTime = (date) => {
  //if date is null or empty string return nothin
  if (!date || date == "") {
    return "";
  }

  var formatDate = new Date(date);
  var stringDate = formatDate.toDateString().split(" ");

  return stringDate[1] + " " + stringDate[2] + ", " + stringDate[3];
};

export const formatDateSlash = (date) => {
  //if date is null or empty string return nothin
  if (!date || date == "") {
    return "";
  }

  var stringDate = date.split("-");

  return stringDate[1] + "/" + stringDate[2] + "/" + stringDate[0];
};

export const formatToCSV = (data) => {
  if (!data || data == "") {
    return "";
  }

  return '=""' + data + '""';
};

export const removeToCSVString = (data) => {
  if (!data || data == "") {
    return "";
  }

  return data.replace('""', "").replace("=", "").replace('""', "");
};

export const formatMDY = (date) => {
  // console.log(date)
  var stringDate = date.split("-");
  // console.log(stringDate)
  return stringDate[1] + "-" + stringDate[2] + "-" + stringDate[0];
};

export const formatYMD = (date) => {
  if (!date || date == "") {
    return "";
  }

  var stringDate = date
    .toLocaleDateString("en-US", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
    })
    .split("/");

  return stringDate[2] + stringDate[0] + stringDate[1];
};

export const validateEmail = (email) => {
  if (email === "") {
    return true;
  } else {
    var filter =
      /^\s*[\w\-\+_]+(\.[\w\-\+_]+)*\@[\w\-\+_]+\.[\w\-\+_]+(\.[\w\-\+_]+)*\s*$/;
    return String(email).search(filter) != -1;
  }
};

export const isClosingTime = (time) => {
  var format = "hh:mm:ss";
  var endTime = moment(time, format);
  return moment().isAfter(endTime);
};

export const isNotClosingDate = (date) => {
  return moment().isBefore(moment(date).add(1, "d"));
};

export const validateContact = (num) => {
  var mobileFilter = /((^(\+)(\d){12}$)|(^\d{11}$))/;
  var telFilter = /^[0-9]+(-[0-9]+)+$/;

  if (
    String(num).search(mobileFilter) != -1 ||
    String(num).search(telFilter) != -1
  ) {
    return true;
  } else {
    return false;
  }
};

export const formatNum = (num) => {
  return parseFloat(Math.round(num * 100) / 100).toFixed(2);
};

export const capitalizeFirstLetter = (string) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
};

/***************************
 * Local Storage Utilities
 ***************************/

//return user data from local storage
export const getUser = () => {
  const userStr = localStorage.getItem("user");
  if (userStr) return JSON.parse(userStr);
  else return null;
};

//return user name from local storage
export const getName = () => {
  const userStr = localStorage.getItem("name");
  if (userStr) return JSON.parse(userStr);
  else return null;
};

//return user type from local storage
export const getType = () => {
  const userStr = localStorage.getItem("type");
  if (userStr) return JSON.parse(userStr);
  else return null;
};

//return user role from local storage
export const getRole = () => {
  const userStr = localStorage.getItem("role");
  if (userStr) return JSON.parse(userStr);
  else return null;
};

//return has login id from local storage
export const getLoginId = () => {
  const userStr = localStorage.getItem("login_id");
  if (userStr) return JSON.parse(userStr);
  else return null;
};

//return has reset from local storage
export const getHasReset = () => {
  const userStr = localStorage.getItem("has-reset");
  if (userStr) return JSON.parse(userStr);
  else return null;
};

//return role id from local storage
export const getRoleId = () => {
  return localStorage.getItem("role_id") || null;
};

//return token from local storage
export const getToken = () => {
  const userStr = localStorage.getItem("token");
  if (userStr) return JSON.parse(userStr);
  else return null;
};

//return token expiry from local storage
export const getTokenExpiry = () => {
  return localStorage.getItem("token_expiry") || null;
};

//return user key from local storage
export const getUserKey = () => {
  return localStorage.getItem("user-key") || null;
};

//return current branch from local storage
export const getBranch = () => {
  return localStorage.getItem("branch") || null;
};

//return current branch from local storage
export const getBranchType = () => {
  return localStorage.getItem("branch_type").replace(/['"]+/g, "") || null;
};

//remove token from local storage
export const removeUserSession = () => {
  logoutUser();
  // refreshPage();
  localStorage.removeItem("user");
  localStorage.removeItem("token");
  localStorage.removeItem("name");
  localStorage.removeItem("role");
};

//remove token from local storage
export const removeSession = () => {
  localStorage.removeItem("user");
  localStorage.removeItem("token");
  localStorage.removeItem("type");
  localStorage.removeItem("role");
  localStorage.removeItem("user-key");
  localStorage.removeItem("name");
  localStorage.removeItem("token-expiry");
};

//set the token and user from local storage
export const setUserSession = (token, user) => {
  localStorage.setItem("token", token);
  localStorage.setItem("user", JSON.stringify(user));
};
