import React from "react";
import {Carousel} from "react-bootstrap";
import corona from "./corona.jpg";

export default function Carousel1() {
  return (
    <div>
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={corona}
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>Welcome to the Covid-19 Tracker ! </h3>
            <p style={{ textAlign: "center", fontFamily: "Gilroy",color:'white' }}>
            This Web site will help you get some stats about this virus since
            the start of this pandamic . Stay Safe !{" "}
          </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}
