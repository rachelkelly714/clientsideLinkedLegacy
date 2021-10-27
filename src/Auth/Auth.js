import {Container, Row, Col} from 'reactstrap'; 
import './Portal.css';






/*Components*/
import Signup from './Signup';
import Login from './Login';





const Auth = (props) =>{


return (
  <div >
    <Container className="auth-container">
    <Row>
        <Col md="6">
            <Signup updateToken={props.updateToken} />
        </Col>
        <Col md="6" className="login-col">
            <Login updateToken={props.updateToken} />
        </Col>
    </Row>





    </Container>
 
    </div>
)
}

export default Auth;