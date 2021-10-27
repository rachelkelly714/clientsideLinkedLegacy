

import { useState } from 'react';
import { Col, Button, Row, Form, FormGroup, Label, Input } from 'reactstrap';



const Gear = (props) => {
  const [acItem, setAcItem] = useState("");
  const [acItemTwo, setAcItemTwo] = useState("");
  const [acItemThree, setAcItemThree] = useState("");
  const [acItemFour, setAcItemFour] = useState("");
  const [acItemFive, setAcItemFive] = useState("");
  const [shield, setShield] = useState("");
  const [gear, setGear] = useState([]);

  const fetchGear = (e) => {
 
    console.log('working?')
    fetch("http://localhost:5500/gear/create", {
      method: "POST",
      body: JSON.stringify({
        gear: {
        acItem: acItem,
        acItemTwo: acItemTwo,
        acItemThree: acItemThree,
        acItemFour: acItemFour,
        acItemFive: acItemFive, 
        shield:shield
         },

      }),
      headers: new Headers({
        "Content-Type": "application/json",
        Authorization: `Bearer ${props.token}`,
      }),
    })
      .then((res) => res.json())
      .then((gearData) => {
        console.log(gearData);
       // setGear(gearData);
      }).catch(err => console.log(err))
  
    }; 

    const formStyles = {
      backgroundColor: "green",
    }
    
  return (
    <>
      <Form onSubmit={fetchGear} style={formStyles}>
      <h3>Gear</h3>
        <FormGroup>
          <Label htmlFor="Name"></Label>
          <Input
            name="acItem"
            value={acItem}
            onChange={(e) => setAcItem(e.target.value)}
          ></Input>
        </FormGroup>
        <FormGroup>
          <Label htmlFor="acItemTwo"></Label>
          <Input
            name="acItemTwo"
            value={acItemTwo}
            onChange={(e) => setAcItemTwo(e.target.value)}
          ></Input>
        </FormGroup>
        <FormGroup>
          <Label htmlFor="acItemThree"></Label>
          <Input
            name="acItemThree"
            value={acItemThree}
            onChange={(e) => setAcItemThree(e.target.value)}
          ></Input>
        </FormGroup>
        <FormGroup>
          <Label htmlFor="acItemFour"></Label>
          <Input
            name="acItemFour"
            value={acItemFour}
            onChange={(e) => setAcItemFour(e.target.value)}
          ></Input>
        </FormGroup>
        <FormGroup>
          <Label htmlFor="acItemFive"></Label>
          <Input
            name="acItemFive"
            value={acItemFive}
            onChange={(e) => setAcItemFive(e.target.value)}
          ></Input>
        </FormGroup>
        <FormGroup>
          <Label htmlFor="shield">Shield</Label>
          <Input
            name="shield"
            value={shield}
            onChange={(e) => setShield(e.target.value)}
          ></Input>
        </FormGroup>
        <Button type="submit">Save</Button>
      </Form>
    </>
  );

  };








export default Gear;








// const Gear = (props) => {

    




//     const inputStyles = {

//         position: 'center',
//         alignItems: 'center',
//         marginLeft: '30px',
//         marginRight: '50px',
    
        
        
      
//     }

//     const inputStyle = {
//         position: 'center',
//         alignItems: 'center',
//         marginLeft: '30px',
    

//     }

//     const labelStyles = {
//         position: 'center',
//         textAlign: 'center',
      
//     }

//     const formStyles = {
//       backgroundColor: 'rgb(226, 188, 18)',
//       width: '390px',
//       padding: '20px 20px 20px 5px',
//       borderRadius: '2em',
//       opacity: '.8',
//       alignItems: 'center',
//       flexDirection: 'row',
//       fontSize: '22px',
//       position: 'absolute',
//       top: '1300px',
//       height: '400',
//       marginLeft: '600px'
      
      
  
  
//   }

 


//     return (
        
//         <Form style= {formStyles}>
//             <p>Gear</p>
//           <Row>
//             <Col md={6}>
//               <FormGroup style = {inputStyles}>
//                 <Input style= {inputStyles}  name="gear" id="gear"/>
//               </FormGroup>
//             </Col>
//             <Col md={6}>
//               <FormGroup style = {inputStyles}>
//                 <Input style= {inputStyles}  name="gear" id="gear"/>
//               </FormGroup>
//             </Col>
//             <Col md={6}>
//               <FormGroup style = {inputStyles}>
//                 <Input style= {inputStyles}  name="gear" id="gear"/>
//               </FormGroup>
//             </Col>
//             <Col md={6}>
//               <FormGroup style = {inputStyles}>
//                 <Input style= {inputStyles}  name="gear" id="gear"/>
//               </FormGroup>
//             </Col>
//             <Col md={6}>
//               <FormGroup style = {inputStyles}>
//                 <Input style= {inputStyles}  name="gear" id="gear"/>
//               </FormGroup>
//             </Col>
//             <Col md={6}>
//               <FormGroup style = {inputStyles}>
//                 <Input style= {inputStyles}  name="gear" id="gear"/>
//               </FormGroup>
//             </Col>
//             <Col md={6}>
//               <FormGroup style = {inputStyles}>
//                 <Input style= {inputStyles}  name="gear" id="gear"/>
//               </FormGroup>
//             </Col>
//             <Col md={6}>
//               <FormGroup style = {inputStyles}>
//                 <Input style= {inputStyles}  name="gear" id="gear"/>
//               </FormGroup>
//             </Col>
//             <Col md={6}>
//               <FormGroup style = {inputStyles}>
//                 <Input style= {inputStyles}  name="gear" id="gear"/>
//               </FormGroup>
//             </Col>












//           </Row>
          
          
//         </Form>
       
//       );
//     }

