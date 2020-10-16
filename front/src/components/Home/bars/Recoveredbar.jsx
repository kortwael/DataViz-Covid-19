import React,{useEffect, useState} from 'react';
import {Bar} from 'react-chartjs-2';
import axios from 'axios';
function Recoveredbar() {
    
    const [africa,setafrica]=useState()
    const [asia,setasia]=useState()
    const [america,setamerica]=useState()
    const [europe,seteurope]=useState()
    const [oceania,setoceania]=useState()

    useEffect(()=>{
        axios.get("http://127.0.0.1:5000/")
        .then(response =>{
            setafrica(response.data.last_day.Africa.recovered)
            setamerica(response.data.last_day.Americas.recovered)
            seteurope(response.data.last_day.Europe.recovered)
            setasia(response.data.last_day.Asia.recovered)
            setoceania(response.data.last_day.Oceania.recovered)
        }
            )
        
        },[] ) 
        const barChart = (
      
            <Bar
            data={{
              labels: ['Europe','Asia','Americas','Africa','Oceania'] ,
              datasets: [{
                data: [europe,asia,america,africa,oceania],
                backgroundColor : ['#000500','#9B9ECE','#6665DD','#473BF0','#EAE7F8']
              }, 
                
              ],
            }}
          />)
    
    return (
        <div>
            {barChart}
        </div>
    );
}

export default Recoveredbar;