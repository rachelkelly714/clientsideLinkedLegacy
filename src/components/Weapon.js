import { Col, Row, Form, FormGroup, Label, Input } from 'reactstrap';

const Weapon = (props) => {

    const inputStyles = {

        position: 'center',
        alignItems: 'center',
        marginLeft: '20px',
        marginRight: '30px',
    
      
    }

    const inputStyle = {
        position: 'center',
        alignItems: 'right',
        marginLeft: '60px',
    

    }

    const labelStyles = {
        position: 'center',
        textAlign: 'center',
        marginLeft: '10px'
      
    }

    const labelStyle = {
        position: 'center',
        textAlign: 'center',
        marginLeft: '60px'
      
    }

    const formStyles = {
      backgroundColor: 'rgba(52, 73, 94, 1)',
      width: '500px',
      padding: '20px 20px 20px 5px',
      borderRadius: '2em',
      opacity: '.8',
      flexDirection: 'row',
      fontSize: '22px',
      display: 'inline',
      float: 'left',
      marginRight: '150px'
      
  
  }


  return (
    <Form style = {formStyles}>
        <p>Weapon</p>
      <Row>
        <Col md={5}>
          <FormGroup>
            <Label style={labelStyles} for="weapon">Weapon</Label>
            <Input style = {inputStyles}  name="weapon" id="weapon"/>
          </FormGroup>
        </Col>
        <Col md={5}>
          <FormGroup>
            <Label style={labelStyle} for="attack bonus">Attack Bonus</Label>
            <Input style ={inputStyle}  name="attackbonus" id="attackbonus"/>
          </FormGroup>
        </Col>
      </Row>
      
      <Row>
        <Col md={5}>
          <FormGroup>
            <Label style={labelStyles} for="critical">Critical</Label>
            <Input style = {inputStyles}   name="critical" id="critical"/>
          </FormGroup>
        </Col>
        <Col md={5}>
          <FormGroup>
            <Label style={labelStyle} for="range">Range</Label>
            <Input style = {inputStyle}   name="range" id="range"/>
          </FormGroup>
        </Col>
        </Row>
     
        <Row>
        <Col md={5}>
          <FormGroup>
            <Label style={labelStyles} for="Ammunition">Ammunition</Label>
            <Input style = {inputStyles}  name="ammu" id="ammu"/>
          </FormGroup>
        </Col>
        <Col md={5}>
          <FormGroup>
            <Label style={labelStyle} for="weapon type">Weapon Type</Label>
            <Input style = {inputStyle}   name="wptype" id="wptype"/>
          </FormGroup>
        </Col>
        </Row>
        <Row>
        <Col md={5}>
          <FormGroup>
            <Label  style={labelStyles} for="damage">Damage</Label>
            <Input style = {inputStyles}   name="damage" id="damage"/>
          </FormGroup>
        </Col>
       </Row>
      </Form>
      
  );
}

export default Weapon;