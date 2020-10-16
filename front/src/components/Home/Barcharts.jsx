import React from 'react';
import {Tab,Tabs} from 'react-bootstrap';
import Confirmebar from './bars/confirmebar';
import Recoveredbar from './bars/Recoveredbar'
import Deathbar from './bars/Deathbar'

function Barcharts() {
  
    return (
    <div>
        <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example">
        <Tab eventKey="home" title="Confirmed cases">
            <Confirmebar/>
        </Tab>
        <Tab eventKey="profile" title="Recovered Cases">
        <Recoveredbar/>

        </Tab>
        <Tab eventKey="contact" title="Dead Cases">
        <Deathbar />
        </Tab>
        </Tabs>
    </div>
    );
}

export default Barcharts;