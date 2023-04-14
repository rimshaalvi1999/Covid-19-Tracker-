import './App.css';
import Cards from './components/Cards/Cards';
import Chart from './components/Chart/Chart';
import CountryPicker from './components/CountryPicker/CountryPicker';
import { useState,useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchData} from './store/actions/dataAction';
function App() {

  let dispatch=useDispatch();
  
  
  
  function showData(){
      // let data =await FetchData();
      // console.log(data);
      // dispatch({
      //   type:"get-api-data",
      //   payload:{
      //       // title:newTItle,
      //       city:"FSD",
      //       country:"PAK"
      //   }
      // })
    // alert("app hit");

    dispatch(fetchData());
      
    }
    
    useEffect(() => {
      showData();
  
}, [])





return (
  
    <>
  <Cards />
  <CountryPicker/>
  <Chart/>
    </>
    
  );
}

export default App;
