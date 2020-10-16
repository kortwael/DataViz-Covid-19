import React, { useEffect, useState } from "react";
import ReactTooltip from "react-tooltip";
import MapChart from "./MapChartComponent";
import { useHistory } from "react-router-dom";
import { Select } from "evergreen-ui";
import axios from "axios";
import Info from "./Info";
import LineWorld from "./LineWorld.jsx";
import Carousel1 from "./Carousel1.jsx";
import Description from "./Description";
import Barcharts from './Barcharts.jsx';
function Home() {
  let history = useHistory();
  const [countryName, setcountryName] = useState([]);
  const handle = (event) => {
    history.push("/Country/" + event);
  };
  useEffect(() => {
    axios
      .get("http://127.0.0.1:5000/")
      .then((response) => setcountryName(response.data.Country_list))
      .catch((e) => console.log(e));
  }, []);

  const [content, setContent] = useState("");

  return (
    <div>
      <Carousel1 />

      <h1
        style={{
          color: "	#2EA3DD",
          marginTop: '4%',
          marginLeft: '35%',
          fontStyle: "Italic",
          fontSize: '50px',
          fontFamily: "Gilroy",
        }}
      >
        {" "}
            Description of the Virus :
          </h1>
      <Description />
      <h1
        style={{
          color: "	#2EA3DD",
          marginLeft: "10%",
          fontStyle: "Italic",
          margin: "5%",
          fontFamily: "Gilroy",
        }}
      >
        General stats over the World :{" "}
      </h1>

      <br />
      <div className='container'>
        <Info />
      </div>
      <br />
      <div className='container'>
        <LineWorld />
        <br />
        
      </div>
      <div className='container'>
        <h3 style={{
            color: "	#084B8A",
            marginLeft: "3%",
            fontStyle: "Italic",
            fontFamily: "Gilroy",
            marginTop:"3%"
            
          }}> Statistics per Region : </h3>
          <br/>
          <Barcharts />
      </div>

      <br />
      <h1
        style={{
          color: "	#2EA3DD",
          marginLeft: "6%",
          fontStyle: "Italic",
          fontFamily: "Gilroy",
          marginTop: '5%'
        }}
      >
        {" "}
        Countries Statistics :
      </h1>
      <br />
      <br />

      <div className='container' style={{ fontSize: "30px" }}>

        <Select
          id="country"
          width="100%"
          height={60}
          onChange={(event) => handle(event.target.value)}
        >
          <option>select a country </option>
          {countryName.map((country) => (
            <option value={country}>{country}</option>
          ))}
        </Select>
      </div>
      <div className="container" style={{ marginTop: '5%', marginLeft: "12%", fontStyle: 'italic' }}>
        <h1 style={{ color: "	#2EA3DD", fontFamily: "Gilroy" }}>
          World Population Map :{" "}
        </h1>{" "}
        <br />
        <MapChart setTooltipContent={setContent} />
        <ReactTooltip>{content}</ReactTooltip>
      </div>
    </div>
  );
}

export default Home;
