import React from 'react'
import './CountryPicker.css'
import { useDispatch, useSelector } from 'react-redux'
import { countryData } from '../../store/actions/dataAction';
export default function CountryPicker() {
  let dispatch = useDispatch();
  let country = [];
  let storage = useSelector(state => state.data.data);
  console.log(storage);
  storage.forEach(element => {
    country.push(element.country);
  });
  console.log(country);


  function showCountryData(element) {
    dispatch(countryData(element));
    console.log(element);
  }

  return (
    <>
      <select className='optionss' onChange={(e) => {
        showCountryData(e.target.value)
      }}>
        {country.map(element => {
          return <option value={element}>
            {element}
          </option>
        })}
      </select>
    </>
  )
}
