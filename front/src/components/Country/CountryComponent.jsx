import React,{useEffect}  from 'react';
import '../../App.css'
import {useParams} from 'react-router-dom';
import Recovered from './Recovered';
import Deaths from './deaths.jsx'
import Confirmed from'./confirmed';
import Active from './Active';
import Closed from './Closed';
import {Col,Row,Container} from 'react-bootstrap';

function Country(){
    let {name} =useParams()
    

    return(
        <div style={{marginTop:'7%'}}>
            <h1 className='title'>{name}</h1>
            <Confirmed />
            <Recovered />
            <Deaths />
                <Row style={{width:'100%',margin:'1%',marginBottom:"10%"}}>
                    <Col>
                        <h3  style={{textAlign :'center'}}>Active Cases</h3>
                        <Active/>
                    </Col>
                    <Col>
                        <h3 style={{textAlign :'center'}}>Closed  Cases</h3>
                        <Closed/>
                    </Col>
                </Row>
        </div>
        
    );
}

export default Country ;