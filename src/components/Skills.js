import { InputGroup, InputGroupAddon, InputGroupText, Input, Label, Form, Row } from 'reactstrap';




const Skills = (props) => {


    const labelStyles = {
        position: 'center',
        textAlign: 'center',
        color: 'white',
        marginLeft: '10px',
        padding: '20px 20px 20px 5px',
        width: '700px'

      
    }

    const ipt = {
        width: '100px',
        padding: '20px 20px 3px 5px',
        position: 'center',
        marginLeft: '100px',

    }


    const formStyles = {
        backgroundColor: 'rgba(103, 65, 114, 1)',
        width: '300px',
        padding: '20px 20px 20px 5px',
        borderRadius: '2em',
        opacity: '.8',
        flexDirection: 'row',
        fontSize: '22px',
        display: 'inline',
        float: 'right',
        position: 'absolute',
        left: '1250px'
     

    }
  


    return (
      <div>
         <Form>
             <Row>
         <p>Skills</p>
        <InputGroup style={ipt}>
       
          <InputGroupAddon addonType="prepend">
          
            <InputGroupText>
            <Label for="character name">Athletics</Label>
              <Input  addon type="checkbox" aria-label="Checkbox for following text input" />
            </InputGroupText>
          </InputGroupAddon>
          <Input placeholder="prof + mods" />
        </InputGroup>
        <InputGroup>
          <InputGroupAddon addonType="prepend">
            <InputGroupText>
        <Label for="character name">Acrobatics</Label>
              <Input addon type="checkbox" aria-label="Checkbox for following text input" />
            </InputGroupText>
          </InputGroupAddon>
          <Input placeholder="prof + mods" />
        </InputGroup>
        <InputGroup>
          <InputGroupAddon addonType="prepend">
            <InputGroupText>
        <Label for="character name">Sleight of Hand</Label>
              <Input addon type="checkbox" aria-label="Checkbox for following text input" />
            </InputGroupText>
          </InputGroupAddon>
          <Input placeholder="prof + mods" />
        </InputGroup>
        <InputGroup>
          <InputGroupAddon addonType="prepend">
            <InputGroupText>
        <Label for="character name">Stealth</Label>
              <Input addon type="checkbox" aria-label="Checkbox for following text input" />
            </InputGroupText>
          </InputGroupAddon>
          <Input placeholder="prof + mods" />
        </InputGroup>
        <InputGroup>
          <InputGroupAddon addonType="prepend">
            <InputGroupText>
        <Label for="character name">Arcana</Label>
              <Input addon type="checkbox" aria-label="Checkbox for following text input" />
            </InputGroupText>
          </InputGroupAddon>
          <Input placeholder="prof + mods" />
        </InputGroup>
        <InputGroup>
          <InputGroupAddon addonType="prepend">
            <InputGroupText>
        <Label for="character name">History</Label>
              <Input addon type="checkbox" aria-label="Checkbox for following text input" />
            </InputGroupText>
          </InputGroupAddon>
          <Input placeholder="prof + mods" />
        </InputGroup>
        <InputGroup>
          <InputGroupAddon addonType="prepend">
            <InputGroupText>
        <Label for="character name">Investigation</Label>
              <Input addon type="checkbox" aria-label="Checkbox for following text input" />
            </InputGroupText>
          </InputGroupAddon>
          <Input placeholder="prof + mods" />
        </InputGroup>
        <InputGroup>
          <InputGroupAddon addonType="prepend">
            <InputGroupText>
        <Label for="character name">Nature</Label>
              <Input addon type="checkbox" aria-label="Checkbox for following text input" />
            </InputGroupText>
          </InputGroupAddon>
          <Input placeholder="prof + mods" />
        </InputGroup>
        <InputGroup>
          <InputGroupAddon addonType="prepend">
            <InputGroupText>
        <Label for="character name">Religon</Label>
              <Input addon type="checkbox" aria-label="Checkbox for following text input" />
            </InputGroupText>
          </InputGroupAddon>
          <Input placeholder="prof + mods" />
        </InputGroup>
        <InputGroup>
          <InputGroupAddon addonType="prepend">
            <InputGroupText>
        <Label for="character name">Animal Handling</Label>
              <Input addon type="checkbox" aria-label="Checkbox for following text input" />
            </InputGroupText>
          </InputGroupAddon>
          <Input placeholder="prof + mods" />
        </InputGroup>
        <InputGroup>
          <InputGroupAddon addonType="prepend">
            <InputGroupText>
        <Label for="character name">Insight</Label>
              <Input addon type="checkbox" aria-label="Checkbox for following text input" />
            </InputGroupText>
          </InputGroupAddon>
          <Input placeholder="prof + mods" />
        </InputGroup>
        <InputGroup>
          <InputGroupAddon addonType="prepend">
            <InputGroupText>
        <Label for="character name">Medicine</Label>
              <Input addon type="checkbox" aria-label="Checkbox for following text input" />
            </InputGroupText>
          </InputGroupAddon>
          <Input placeholder="prof + mods" />
        </InputGroup>
        <InputGroup>
          <InputGroupAddon addonType="prepend">
            <InputGroupText>
        <Label for="character name">Survival</Label>
              <Input addon type="checkbox" aria-label="Checkbox for following text input" />
            </InputGroupText>
          </InputGroupAddon>
          <Input placeholder="prof + mods" />
        </InputGroup>
        <InputGroup>
          <InputGroupAddon addonType="prepend">
            <InputGroupText>
        <Label for="character name">Deception</Label>
              <Input addon type="checkbox" aria-label="Checkbox for following text input" />
            </InputGroupText>
          </InputGroupAddon>
          <Input placeholder="prof + mods" />
        </InputGroup>
        <InputGroup>
          <InputGroupAddon addonType="prepend">
            <InputGroupText>
        <Label for="character name">Intimidation</Label>
              <Input addon type="checkbox" aria-label="Checkbox for following text input" />
            </InputGroupText>
          </InputGroupAddon>
          <Input placeholder="prof + mods" />
        </InputGroup>
        <InputGroup>
          <InputGroupAddon addonType="prepend">
            <InputGroupText>
        <Label for="character name">Performance</Label>
              <Input addon type="checkbox" aria-label="Checkbox for following text input" />
            </InputGroupText>
          </InputGroupAddon>
          <Input placeholder="prof + mods" />
        </InputGroup>
        <InputGroup>
          <InputGroupAddon addonType="prepend">
            <InputGroupText>
        <Label for="character name">Persuasion</Label>
              <Input addon type="checkbox" aria-label="Checkbox for following text input" />
            </InputGroupText>
          </InputGroupAddon>
          <Input placeholder="prof + mods" />
        </InputGroup>
        </Row>
       
        </Form>










        
      </div>
    );
  };
  
  export default Skills;