import { getAPICallGoogle } from "./axiosMethodCalls";

export const getLocationOnLoad = async (lat,lng) => {
    try {
        const response = await getAPICallGoogle("https://maps.googleapis.com/maps/api/geocode/json?latlng="+lat+","+lng+"&key=AIzaSyAHeix3Mf1YRppXp1hxArkPwkevOZFc1Ew");
            // console.log(response)
          return ({data:response.data}); 
    } catch (error) {
        return ({error: error.response});
    }
}
