import React, {useState} from 'react'; 
import {Button, Form, FormGroup, Label, Input, Modal, ModalHeader, ModalBody} from 'reactstrap'; 



const CharacterEdit = (props) => {

const [editCName, setEditCName] = useState(props.charToUpdate.characterName);
const [editPName, setEditPName] = useState(props.charToUpdate.playerName);
const [editAlign, setEditAlign] = useState(props.charToUpdate.alignment);
const [editLvl, setEditLvl] = useState(props.charToUpdate.level);
const [editGod, setEditGod] = useState(props.charToUpdate.deity);
const [editRace, setEditRace] = useState(props.charToUpdate.race);
const [editSize, setEditSize] = useState(props.charToUpdate.size); 
const [editGen, setEditGen] = useState(props.charToUpdate.gender); 
const [editAge, setEditAge] = useState(props.charToUpdate.age); 
const [editHt, setEditHt] = useState(props.charToUpdate.height);
const [editWt, setEditWt] = useState(props.charToUpdate.weight); 
const [editPd, setEditPd] = useState(props.charToUpdate.physicalDescription)

const charUpdate = (e, sheet) => {
    e.preventDefault();
    fetch(`http://localhost:5500/charinfo/update/${props.charToUpdate.id}`, {
        method: 'PUT',
        body: JSON.stringify({charinfo: {
            characterName:editCName,
            playerName:editPName,
            alignment:editAlign,
            level:editLvl,
            deity:editGod,
            race:editRace,
            size:editSize,
            gender:editGen,
            age:editAge,
            height:editHt,
            weight:editWt,
            physicalDescription:editPd}}),
            headers: new Headers ({
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${props.token}`
            })
    }).then((res) => {
        props.fetchCsheet();
        props.updateOff();
    })
}








return (
   <Modal isOpen={true}>
<ModalHeader>Update Your Character</ModalHeader>
<ModalBody>
    <Form onSubmit={charUpdate}>
     <FormGroup>
    <Label htmlFor="character name">Change Character Name</Label>
    <Input name="characterName" value={editCName} onChange={(e) => setEditCName(e.target.value)}/>
    </FormGroup>
    <FormGroup>
    <Label htmlFor="player name">Change Your Name</Label>
    <Input name="playerName" value={editPName} onChange={(e) => setEditPName(e.target.value)}/>
    </FormGroup>
    <FormGroup>
    <Label htmlFor="alignment">Change Alignment</Label>
    <Input name="alignment" value={editAlign} onChange={(e) => setEditAlign(e.target.value)}/>
    </FormGroup>
    <FormGroup>
    <Label htmlFor="level">Change Level</Label>
    <Input name="level" value={editLvl} onChange={(e) => setEditLvl(e.target.value)}/>
    </FormGroup>
    <FormGroup>
    <Label htmlFor="deity" title="this could have in-game consequences if you're playing a cleric!">Change Diety</Label>
    <Input name="diety" value={editGod} onChange={(e) => setEditGod(e.target.value)}/>
    </FormGroup>
    <FormGroup>
    <Label htmlFor="race">Change Character Race</Label>
    <Input name="race" value={editRace} onChange={(e) => setEditRace(e.target.value)}/>
    </FormGroup>
    <FormGroup>
    <Label htmlFor="size">Change Size</Label>
    <Input name="size" value={editSize} onChange={(e) => setEditSize(e.target.value)}/>
    </FormGroup>
    <FormGroup>
    <Label htmlFor="gender">Change Gender</Label>
    <Input name="gender" value={editGen} onChange={(e) => setEditGen(e.target.value)}/>
    </FormGroup>
    <FormGroup>
    <Label htmlFor="age">Change Age</Label>
    <Input name="age" value={editAge} onChange={(e) => setEditAge(e.target.value)}/>
    </FormGroup>
    <FormGroup>
    <Label htmlFor="height">Change Height</Label>
    <Input name="height" value={editHt} onChange={(e) => setEditHt(e.target.value)}/>
    </FormGroup>
    <FormGroup>
    <Label htmlFor="weight">Change Weight</Label>
    <Input name="characterName" value={editWt} onChange={(e) => setEditWt(e.target.value)}/>
    </FormGroup>
    <FormGroup>
    <Label htmlFor="physical description">Change Physical Description</Label>
    <Input name="characterName" value={editPd} onChange={(e) => setEditPd(e.target.value)}/>
    </FormGroup>
    <Button type="submit" onClick={charUpdate}>Save Changes</Button>
    </Form>
</ModalBody>

   </Modal>
)





}


export default CharacterEdit;