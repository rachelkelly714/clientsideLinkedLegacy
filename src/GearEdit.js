import React, {useState} from 'react'; 
import {Button, Form, FormGroup, Label, Input, Modal, ModalHeader, ModalBody} from 'reactstrap'; 



const GearEdit = (props) => {

const [editAcItem, setEditAcItem] = useState(props.gearToUpdate.acItem);
const [editAcItemTwo, setEditAcItemTwo] = useState(props.gearToUpdate.acItemTwo);
const [editAcItemThree, setEditAcItemThree] = useState(props.gearToUpdate.acItemThree);
const [editAcItemFour, setEditAcItemFour] = useState(props.gearToUpdate.acItemFour);
const [editAcItemFive, setEditAcItemFive] = useState(props.gearToUpdate.acItemFive);
const [editShield, setEditShield] = useState(props.gearToUpdate.shield);

const gearUpdate = (e, sheet) => {
    e.preventDefault();
    fetch(`http://localhost:5500/gear/update/${props.gearToUpdate.id}`, {
        method: 'PUT',
        body: JSON.stringify({gear: {
            acItem:editAcItem,
            acItemTwo:editAcItemTwo,
            acItemThree:editAcItemThree,
            acItemFour:editAcItemFour,
            acItemFive:editAcItemFive}}),
            headers: new Headers ({
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${props.token}`
            })
    }).then((res) => {
        props.fetchGsheet();
        props.updateOff();
    })
}








return (
   <Modal isOpen={true}>
<ModalHeader>Update Character Gear</ModalHeader>
<ModalBody>
    <Form onSubmit={gearUpdate}>
     <FormGroup>
    <Label htmlFor="ac item one">Change AC Item One</Label>
    <Input name="ac item one" value={editAcItem} onChange={(e) => setEditAcItem(e.target.value)}/>
    </FormGroup>
    <FormGroup>
    <Label htmlFor="ac item two">Change AC Item Two</Label>
    <Input name="ac item two" value={editAcItemTwo} onChange={(e) => setEditAcItemTwo(e.target.value)}/>
    </FormGroup>
    <FormGroup>
    <Label htmlFor="ac item three">Change AC Item Three</Label>
    <Input name="ac item three" value={editAcItemThree} onChange={(e) => setEditAcItemThree(e.target.value)}/>
    </FormGroup>
    <FormGroup>
    <Label htmlFor="ac item four">Change AC Item Four</Label>
    <Input name="ac item four" value={editAcItemFour} onChange={(e) => setEditAcItemFour(e.target.value)}/>
    </FormGroup>
    <FormGroup>
    <Label htmlFor="ac item five">Change Ac Item Five</Label>
    <Input name="ac item five" value={editAcItemFive} onChange={(e) => setEditAcItemFive(e.target.value)}/>
    </FormGroup>
    <FormGroup>
    <Label htmlFor="shield">Shield</Label>
    <Input name="shield" value={editShield} onChange={(e) => setEditShield(e.target.value)}/>
    </FormGroup>
    
    <Button type="submit" onClick={gearUpdate}>Save Changes</Button>
    </Form>
</ModalBody>

   </Modal>
)





}


export default GearEdit;