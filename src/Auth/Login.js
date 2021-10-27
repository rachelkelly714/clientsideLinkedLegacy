import React, {useState} from 'react';
import {Form, FormGroup, Label, Input, Button} from 'reactstrap'; 
import './Portal.css'

const Login= (props) => {
    const [username, setUsername] = useState(''); 
    const [password, setPassword] = useState('');

    let handleSubmit= (event) => {
        event.preventDefault()
        fetch("http://localhost:5500/user/login", {
            method: 'POST',
            body: JSON.stringify({user:{username:username, password:password}}),
            headers: new Headers({
                'Content-Type': 'application/JSON'
            })
        }).then(
            (response) => response.json()
        ).then((data) => {
            props.updateToken(data.SessionToken)
        })
    }

const formStyles = {
    backgroundColor: 'rgb(248, 244, 239)',
    margin: '70px',
  marginTop: '100px',
  padding: '20px 20px 20px 5px',
  textAlign: 'center',
  FlexDirection: 'row',
}

const buttonStyles = {
    margin: '20px',
    padding: '3px 10px 3px 10px',
    borderRadius: '5em',
}


return (
<div>
<Form style={formStyles} onSubmit={handleSubmit}>
<h1>Login</h1>
<FormGroup>
<Label htmlFor="username">Username</Label>
<Input onChange={(e) => setUsername(e.target.value)} name="username" value={username}/> 
</FormGroup>
<FormGroup>
<Label htmlFor="password">Password</Label>
<Input onChange={(e) =>setPassword(e.target.value)} name="password" value={password}/>
</FormGroup>
<Button styles={buttonStyles} type="submit">Login</Button>
</Form>
</div>

)

}



export default Login; 