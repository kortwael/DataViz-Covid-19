import React,{useEffect,useState} from 'react';
import axios from 'axios';
import {useParams} from 'react-router-dom';
import {Pie} from 'react-chartjs-2';



function Active() {
    let {name} =useParams()
    console.log(name)
    const [active,setActive]=useState()
    useEffect(()=>{
        axios.get(`http://127.0.0.1:5000/${name}/`)
        .then(response => {
            console.log(response.data)
           setActive(response.data.last_day_values.pourcenttage_of_active_cases)

           })
      },[] ) 
      const pieChart = (
      
        <Pie
          data={{
            labels: ['Pourcentage of active cases','Closed'] ,
            datasets: [{
              data: [active, 100-active],
              backgroundColor : ['#000500','#473BF0']
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

export default Active;