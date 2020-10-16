import React from "react";
import { Media } from "react-bootstrap";
import Desc from "./cov.png";

export default function Description() {
  return (
    <div>
      <Media style={{backgroundColor:'white',marginTop:'5%'}}>
        <img
          width={700}
          height={400}
          className="mr-3"
          src={Desc}
          alt="Generic placeholder"
        />
        <Media.Body>
          <h3 style={{marginTop:'10%' , fontFamily: "Gilroy" ,color:'Black'}}>
            {" "}
            The coronavirus disease (COVID-19) is an infectious disease caused
            by a new strain of coronavirus. This new virus and disease were
            unknown before the outbreak began in Wuhan, China, in December 2019
          </h3>

          
        </Media.Body>
      </Media>
    </div>
  );
}
