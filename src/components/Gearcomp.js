import  {useEffect, useState} from 'react';
import {Table, Button} from 'reactstrap'; 
import {ModalHover} from 'react-modal-hover';


const GearComp = (props) => {


     const getRidGear =(sheet) => {
         
              fetch(`http://localhost:5500/gear/${sheet.id}`, {
                 method: 'DELETE',
                 headers: new Headers ({
                     'Content-Type': 'application/json',
                     'Authorization': `Bearer ${props.token}`
                 })
             })
             .then(() => props.fetchGsheet())
             
     }

// useEffect(() => {
// getRidGear()


// }, [])


 


  const gsheetMapper = () => {
      return props.gsheet.map((sheet, index) => {
        
        return (

<>
<tr key={index.id}>
<th>{sheet.acItem}</th>
<td>{sheet.acItemTwo}</td>
<td>{sheet.acItemThree}</td>
<td>{sheet.acItemFour}</td>
<td>{sheet.acItemFive}</td>
<td>{sheet.shield}</td>
<td>
<Button color="warning" onClick={() =>{props.editUpdateGear(sheet); props.updateOn()}} >Update</Button>
<Button color="danger" onClick={() => {getRidGear(sheet)}}>Delete</Button>
</td>
</tr>
</>

        )
      })
    
    }
    return (
        <>
        <hr />
        <h3> Character Gear</h3>
       <Table dark>
      <thead>
          <tr>
       <th>Ac Item</th>
       <th>Ac Item</th>
       <th>Ac Item</th>
       <th>Ac Item</th>
       <th>Ac Item</th>
       <th>Ac Item</th>
       </tr>
      </thead>
      <tbody>
      {gsheetMapper()}
    </tbody>
       </Table>
       
        </>
    )









};




export default GearComp; 