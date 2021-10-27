import { Col, Row, Form, FormGroup, Label, Input } from 'reactstrap';



const Spells = (props) => {

  

    const inputStyles = {

        position: 'center',
        alignItems: 'center',
        marginLeft: '30px',
        marginRight: '50px',
    
        
        
      
    }

    const inputStyle = {
        position: 'center',
        alignItems: 'center',
        marginLeft: '30px',
    

    }

    const labelStyles = {
        position: 'center',
        textAlign: 'center',
      
    }

    const formStyles = {
      backgroundColor: 'rgba(42, 187, 155, 1)',
      width: '700px',
      padding: '20px 20px 20px 5px',
      borderRadius: '2em',
      float: 'left',
      opacity: '.8',
      alignItems: 'center',
      flexDirection: 'row',
  
      
  
  
  }

  

 


    return (
        
        <Form style= {formStyles}>
            <p>Spells</p>
          <Row>
            <Col md={6}>
              <FormGroup style = {inputStyles}>
                <Label for="character name" styles={labelStyles}>First Level Spells</Label>
                <Input style= {inputStyles} type="textarea"  name="characterName" id="characterName" placeholder="character name" />
              </FormGroup>
            </Col>
            <Col md={6}>
              <FormGroup style = {inputStyles}>
                <Label for="character name" styles={labelStyles}>Second Level Spells</Label>
                <Input style= {inputStyles} type="textarea"  name="characterName" id="characterName" placeholder="character name" />
              </FormGroup>
            </Col>
            <Col md={6}>
              <FormGroup style = {inputStyles}>
                <Label for="character name" styles={labelStyles}>Third Level Spells</Label>
                <Input style= {inputStyles} type="textarea"  name="characterName" id="characterName" placeholder="character name" />
              </FormGroup>
            </Col>
            <Col md={6}>
              <FormGroup style = {inputStyles}>
                <Label for="character name" styles={labelStyles}>Fourth Level Spells</Label>
                <Input style= {inputStyles} type="textarea"  name="characterName" id="characterName" placeholder="character name" />
              </FormGroup>
            </Col>
            <Col md={6}>
              <FormGroup style = {inputStyles}>
                <Label for="character name" styles={labelStyles}>Fifth Level Spells</Label>
                <Input style= {inputStyles} type="textarea"  name="characterName" id="characterName" placeholder="character name" />
              </FormGroup>
            </Col>
            <Col md={6}>
              <FormGroup style = {inputStyles}>
                <Label for="character name" styles={labelStyles}>Sixth Level Spells</Label>
                <Input style= {inputStyles} type="textarea"  name="characterName" id="characterName" placeholder="character name" />
              </FormGroup>
            </Col>
            <Col md={6}>
              <FormGroup style = {inputStyles}>
                <Label for="character name" styles={labelStyles}>Seventh Level Spells</Label>
                <Input style= {inputStyles} type="textarea"  name="characterName" id="characterName" placeholder="character name" />
              </FormGroup>
            </Col>
            <Col md={6}>
              <FormGroup style = {inputStyles}>
                <Label for="character name" styles={labelStyles}>Eighth Level Spells</Label>
                <Input style= {inputStyles} type="textarea"  name="characterName" id="characterName" placeholder="character name" />
              </FormGroup>
            </Col>
            <Col md={6}>
              <FormGroup style = {inputStyles}>
                <Label for="character name" styles={labelStyles}>Ninth Level Spells</Label>
                <Input style= {inputStyles} type="textarea"  name="characterName" id="characterName" placeholder="character name" />
              </FormGroup>
            </Col>


          </Row>
          
          
        </Form>
       
      );
    }


export default Spells;