import React , {useState , useEffect} from "react"
import {Card,CardDeck} from "react-bootstrap"
import confirmed from "./confirmed.png"
import recovered from "./recovered.png"
import death from "./death.png"
import axios from "axios"

export default function Info() {   
  useEffect(() => {
    axios
      .get("https://api.apify.com/v2/key-value-stores/SmuuI0oebnTWjRTUh/records/LATEST?disableRedirect=true/")
      .then((response) =>{setConfirmed(response.data.regionData[0].totalCases)
                          setRecov(response.data.regionData[0].totalRecovered,
                          setDead(response.data.regionData[0].totalDeaths) ) });
  }, []);
  const[confirmedcases,setConfirmed]=useState()
  const[recov,setRecov]=useState()
  const[dead,setDead]=useState()
  return (
    <div>
      <CardDeck>
        <Card>
          <Card.Img variant="top" src={confirmed} />
          <Card.Body>
            <Card.Title style={{ fontFamily:'Gilroy'}}>Confimed Cases : </Card.Title>
            <Card.Text style={{fontSize:'250%' , fontFamily:'Gilroy'}}>
                {confirmedcases}
            </Card.Text>
          </Card.Body>
        </Card>
        <Card>
          <Card.Img variant="top" src={recovered} />
          <Card.Body>
            <Card.Title style={{ fontFamily:'Gilroy'}}> Recovered :</Card.Title>
            <Card.Text style={{fontSize:'250%' , fontFamily:'Gilroy'}}>
              {recov}
            </Card.Text>
          </Card.Body>
        </Card>
        <Card>
          <Card.Img variant="top" src={death} />
          <Card.Body>
            <Card.Title style={{ fontFamily:'Gilroy'}}>Death :</Card.Title>
            <Card.Text style={{fontSize:'250%' , fontFamily:'Gilroy'}}>
              {dead}
            </Card.Text>
          </Card.Body>
         
        </Card>
      </CardDeck>
    </div>
  );
}
