import React,{useEffect,useState} from 'react';
import axios from 'axios';
import {useParams} from 'react-router-dom';
import {Pie} from 'react-chartjs-2';

const rounded = num => {
  if (num > 1000000000) {
    return Math.round(num / 100000000) / 10 + "Bn";
  } else if (num > 1000000) {
    return Math.round(num / 100000) / 10 + "M";
  } else {
    return Math.round(num / 100) / 10 + "K";
  }
};



function Closed() {
    let {name} =useParams()
    console.log(name)
    const [recoverd,setRecovered]=useState()
    const [deaths,setDeaths]=useState()

    useEffect(()=>{
        axios.get(`http://127.0.0.1:5000/${name}/`)
        .then(response => {
            console.log(response.data)
           setRecovered(response.data.last_day_values.pourcenttage_of_recovered)
           setDeaths(response.data.last_day_values.pourcenttage_of_deaths)
           })
      },[] ) 
      const pieChart = (
      
        <Pie
        data={{
          labels: ['Recoverd','Deaths'] ,
          datasets: [{
            data: [recoverd,deaths],
            backgroundColor : ['#473BF0','#000500']
          }, 
            
          ],
        }}
      />)
    return (
        <div>
            {pieChart}
        </div>
    );
}

export default Closed;