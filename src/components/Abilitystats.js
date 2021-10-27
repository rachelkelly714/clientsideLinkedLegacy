import './Assets/Ability.css'

import { Col, Row, Form, FormGroup, Label, Input } from 'reactstrap';

const Abilitystats = (props) => {

    const inputStyles = {

        position: 'center',
        alignItems: 'center',
        marginLeft: '30px',
        marginRight: '50px',
    
        
        
      
    }

    const inputStyle = {
        position: 'center',
        alignItems: 'right',
        marginLeft: '90px',
    

    }

    const labelStyles = {
        position: 'center',
        textAlign: 'center',
        marginLeft: '30px'
      
    }

    const labelStyle = {
        position: 'center',
        textAlign: 'center',
        marginLeft: '90px'
      
    }

    const formStyles = {
      backgroundColor: ' rgb(243, 42, 7)',
      width: '350px',
      padding: '20px 20px 20px 5px',
      borderRadius: '2em',
      opacity: '.8',
      flexDirection: 'row',
      fontSize: '22px',
      display: 'inline',
      float: 'left'
      
  
  
  }
  return (
    <Form style = {formStyles}>
        <p>Ability Stats</p>
      <Row>
        <Col md={3}>
          <FormGroup>
            <Label style={labelStyles} for="strength">Strength</Label>
            <Input style = {inputStyles}  name="strength" id="strength"/>
          </FormGroup>
        </Col>
        <Col md={3}>
          <FormGroup>
            <Label style={labelStyle} for="strMod">Str Modifier</Label>
            <Input style ={inputStyle}  name="strMod" id="strMod"/>
          </FormGroup>
        </Col>
      </Row>
      
      <Row>
        <Col md={3}>
          <FormGroup>
            <Label style={labelStyles} for="dexterity">Dexterity</Label>
            <Input style = {inputStyles}   name="dex" id="dex"/>
          </FormGroup>
        </Col>
        <Col md={3}>
          <FormGroup>
            <Label style={labelStyle} for="dexterityMod">Dex Modifier</Label>
            <Input style = {inputStyle}   name="dexMod" id="dexMod"/>
          </FormGroup>
        </Col>
        </Row>
     
        <Row>
        <Col md={3}>
          <FormGroup>
            <Label style={labelStyles} for="constitution">Constitution</Label>
            <Input style = {inputStyles}  name="constitution" id="constitution"/>
          </FormGroup>
        </Col>
        <Col md={3}>
          <FormGroup>
            <Label style={labelStyle} for="constitution modifier">Con Modifier</Label>
            <Input style = {inputStyle}   name="conMod" id="conMod"/>
          </FormGroup>
        </Col>
        </Row>
   
        <Row>
        <Col md={3}>
          <FormGroup>
            <Label  style={labelStyles} for="intelligence">Intelligence</Label>
            <Input style = {inputStyles}   name="intelligence" id="intelligence"/>
          </FormGroup>
        </Col>
        <Col md={3}>
          <FormGroup>
            <Label style={labelStyle} for="intelligence Modifier">Int Modifier</Label>
            <Input style = {inputStyle}   name="intMod" id="intMod"/>
          </FormGroup>
        </Col>
        </Row>
  
        <Row>
        <Col md={3}>
          <FormGroup>
            <Label style={labelStyles} for="wisdom">Wisdom</Label>
            <Input style = {inputStyles}   name="wisdom" id="wisdom"/>
          </FormGroup>
        </Col>
        <Col md={3}>
          <FormGroup>
            <Label style={labelStyle} for="wisdom modifier">Wis Modifier</Label>
            <Input style = {inputStyle}   name="wisMod" id="wisMod"/>
          </FormGroup>
        </Col>
        </Row>
      
        <Row>
        <Col md={3}>
          <FormGroup>
            <Label style={labelStyles} for="charisma">Charisma</Label>
            <Input style = {inputStyles}   name="charisma" id="charisma"/>
          </FormGroup>
        </Col>
        <Col md={3}>
          <FormGroup>
            <Label style={labelStyle} for="charisma modifier">Chr Modifier</Label>
            <Input style = {inputStyle}   name="chrMod" id="chrMod"/>
          </FormGroup>
        </Col>
        </Row>
      </Form>
      
  );
}

export default Abilitystats;