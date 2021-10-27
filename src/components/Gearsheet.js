import React, { useState, useEffect } from 'react';
import {
  Row,
  Col,
  Container,
} from "reactstrap";

import Charinfo from './Charinfo';
import Gear from './Gear';
import GearComp from './Gearcomp';
import GearEdit from '../GearEdit';


import './Assets/Table.css'
import './Assets/swordbglg.jpg'

const Gearsheet = (props) => {
  const [gsheet, setGSheet] = useState([]);
  const [updateActiveG, setUpdateActiveG] = useState(false);
  const [gearToUpdate, setGearToUpdate] = useState({})

 

  const fetchGsheet = () => {

   fetch('http://localhost:5500/gear/mine', {
     method: 'GET',
     headers: new Headers ({
       'Content-Type': 'application/json',
       'Authorization': `Bearer ${props.token}`
     })
   }).then((res) => res.json())
   .then((gearData) => {
     console.log(gearData)
     setGSheet(gearData)
   }).catch(err => console.log(err))


  

  }

useEffect(() => {
  fetchGsheet();
}, [])








const editUpdateGear = (gsheet) => {
  setGearToUpdate(gsheet);
}

const updateOn = () => {
  setUpdateActiveG(true);
}

const updateOff = () => {
  setUpdateActiveG(false)
}







  return (
  
  <Container>
     <Row>
      <Col md="9">
            <GearComp 
            gsheet={gsheet} 
            editUpdateGear={editUpdateGear} 
            updateOn={updateOn} 
            fetchCsheet={fetchGsheet} 
            token={props.token}/>
            

      </Col>
    
      <Col md="4">
       <Gear 
       fetchGsheet={fetchGsheet}
        token={props.token}
        />
    {updateActiveG ? <GearEdit gearToUpdate={gearToUpdate} updateOff={updateOff} fetchGsheet={fetchGsheet} token={props.token} /> : <></>}
      </Col>
      
      </Row>
  </Container>      
)};

export default Gearsheet;
