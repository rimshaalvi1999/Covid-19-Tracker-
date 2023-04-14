import axios from "axios"

// cards data fetch

export const fetchData = (payload) => async (dispatch) => {
  try {
    console.log("working");
    let {data} = await axios.get('https://disease.sh/v3/covid-19/countries', payload);
    dispatch({
      type: 'GET_DATA',
      payload: data
    })
    console.log(data);
    return data;
  } catch (error) {
    console.log('not working');
  }
}


// selector country list
export const countryData=(payload)=>async(dispatch)=>{
 try {
  console.log("show data working");
  dispatch({
    type:'SHOW_DATA',
    payload
  })
  
 } catch (error) {
   console.log("error");
 }
}

// graph active cases
export const activeData=(payload)=>async(dispatch)=>{
  try {
   console.log("show data working active");
   dispatch({
     type:'SHOW_DATA_ACTIVE',
     payload
   })
   
  } catch (error) {
    console.log("error");
  }
 }

//  graph recovered cases
 export const recoveredData=(payload)=>async(dispatch)=>{
  try {
   console.log("show data working recover");
   dispatch({
     type:'SHOW_DATA_RECOVER',
     payload
   })
   
  } catch (error) {
    console.log("error");
  }
 }

// graph deaths cases
 export const deceasedData=(payload)=>async(dispatch)=>{
  try {
   console.log("show data working death");
   dispatch({
     type:'SHOW_DATA_DEATH',
     payload
   })
   
  } catch (error) {
    console.log("error");
  }
 }
 
 