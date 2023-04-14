import React from 'react'
import { Bar } from 'react-chartjs-2'
import {Chart as ChartJS,BarElement, CategoryScale, Legend, LinearScale, Tooltip } from 'chart.js'
import './Chart.css';
import { useSelector } from 'react-redux';
ChartJS.register(
  BarElement, CategoryScale, Legend, LinearScale, Tooltip
)

export default function Chart() {
  let labelsarray=[];
  let cuactive=useSelector(state=>state.data.active);
  let curecover=useSelector(state=>state.data.recover);
  let cudeath=useSelector(state=>state.data.death);
  labelsarray.push(cuactive);
  labelsarray.push(curecover);
  labelsarray.push(cudeath);
  console.log(labelsarray);
  const data={
    labels:['Infected','Recovered','Deaths'],
    datasets:[
      {
        label:'COVID 19 DATA',
        data:labelsarray,
        backgroundColor:'pink',
        borderColor:'black',
        borderWidth:1,
        innerHeight:'2px',
      }
    ]
  }

  // const options={

  // }

  return (
    <div className='chart'>
   <Bar
   data={data}
  //  options={options}
   >
   </Bar>
     </div>
  )
}
