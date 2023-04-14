import React, { useState } from 'react'
import { Grid, Container, Card, CardContent, Typography, CssBaseline } from '@mui/material'
import CountUp from 'react-countup';
// import { fetchData } from '../../../src/store/actions/dataAction';
import { useEffect } from 'react'
import { useDispatch,useSelector } from 'react-redux';
import { activeData } from '../../store/actions/dataAction';
import { recoveredData } from '../../store/actions/dataAction';
import { deceasedData } from '../../store/actions/dataAction';
export default function Cards() {
  // let [active, setActive] = useState([]);
  let dispatch=useDispatch();
  let active=[];
  let recovered=[];
  let deaths=[];
  let adsection = useSelector(state => state.data.data);
  let currentcountry=useSelector(state=>state.data.cu);
  // let cuactive=useSelector(state=>state.data.active);
  console.log(adsection);
  // console.log("active",cuactive);

  let activead = adsection.find((ad) => {
    if (ad.country == currentcountry) {
      return true;
    }
  })

  if (activead) {
    // alert("ml gya");
    console.log(activead);
    dispatch(activeData(activead.active))
    active.push(activead.active);
    
    dispatch(recoveredData(activead.recovered))
    recovered.push(activead.recovered);
    dispatch(deceasedData(activead.deaths))
    deaths.push(activead.deaths);
  } else {
    console.log('not found');
  }
  


  // dispatch(activeData(active));
  // useEffect(() => {
  //   async function getData() {
  //     let response= await fetch("https://disease.sh/v3/covid-19/countries");
  //     let data= await response.json();
  //     setActive(data[0].active);
  //     setRecovered(data[0].recovered);
  //     setDeaths(data[0].deaths);
  //     // console.log(data[0].active);
  //     // console.log(data[0].recovered);
  //     // console.log(data);
  //    }
  //    getData();
  // },[])





  let today = new Date().toLocaleDateString();
  return (
    <div>
      <CssBaseline />
      <Container  spacing={4} sx={{ ml: '24%' }}>
      <Grid container >
          <Grid item component='card'>
        <img src="covid.PNG" alt="bubu" />
            </Grid>
            </Grid>
      </Container>
      <Container>
        <Grid container spacing={4} sx={{ ml: '50px' }}>
          <Grid item component='card'>
            <Card sx={{ display: 'flex', flexDirection: 'column', height: '100%', borderBottom: '10px solid pink' }}>
              <CardContent>
                <Typography variant='h4' textAlign={'center'}><b>Infected</b></Typography>
                <Typography variant='h6'>
                  <CountUp start={0} end={active} duration={2.5} separator=',' />
                </Typography>
                <Typography variant='h6'>{today}</Typography>
                <Typography variant='p'>Number of active cases of covid 19</Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item component='card'>
            <Card sx={{ display: 'flex', flexDirection: 'column', height: '100%', borderBottom: '10px solid greenyellow' }}>
              <CardContent>
                <Typography variant='h4' textAlign={'center'}> <b>Recovered</b></Typography>
                <Typography variant='h6'>
                  <CountUp start={0} end={recovered} duration={2.5} separator=',' />
                </Typography>
                <Typography variant='h6'>{today}</Typography>
                <Typography variant='p'>Number of Recoveries from covid 19</Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item component='card' >
            <Card sx={{ display: 'flex', flexDirection: 'column', height: '100%', borderBottom: '10px solid skyblue' }}>
              <CardContent>
                <Typography variant='h4' textAlign={'center'}><b>Deaths</b></Typography>
                <Typography variant='h6'>
                  <CountUp start={0} end={deaths} duration={2.5} separator=',' />
                </Typography>
                <Typography variant='h6'>{today}</Typography>
                <Typography variant='p'>Number of deaths caused by covid 19</Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </div>
  )
}
