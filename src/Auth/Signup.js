import {useState} from 'react';
import {Form, FormGroup, Label, Input, Button} from 'reactstrap'; 


const Signup = (props) => {
    const [username, setUsername] = useState(''); 
    const [password, setPassword] = useState('');
    const [usernameValid, setUsernameValid] = useState(false);
    const [passwordValid, setPasswordValid] = useState(false);

    let handleSubmit= (event) => {
        console.log('why?')
        event.preventDefault()
        fetch("http://localhost:5500/user/register", {
            method: 'POST',
            body: JSON.stringify({user:{username:username, password:password}}),
            headers: new Headers({
                'Content-Type': 'application/JSON'
            })
        }).then(
            (response) => response.json()
        ).then((data) => {
            console.info(data)
            props.updateToken(data.SessionToken)
        }).catch(err => console.log(err))
    }

    const formStyles = {
        marginTop: '95px'
    }
    const buttonStyles = {
        marginTop: '20px'
    }

return (
<div>
<Form onSubmit={handleSubmit} style={formStyles}>
<h1>Sign Up</h1>
<FormGroup>
<Label htmlFor="username">Username*</Label>
<Input required type='email'  name="username" value={username} valid={usernameValid} invalid={!usernameValid} onChange={
    (e) => { setUsername(e.target.value); if (e.target.value.includes('@') && e.target.value.includes('.')){
    setUsernameValid(true)
    }else {
    setUsernameValid(false)
    }
}}
/> 
</FormGroup>
<FormGroup>
<Label htmlFor="password">Password</Label>
<Input type='password' name="password"  value={password} valid={passwordValid} invalid={!passwordValid} onChange={(e)  => { setPassword(e.target.value); if (e.target.value.length >=5) {
    setPasswordValid(true); 
} else { 
    setPasswordValid(false)}}}/>
</FormGroup>
<Button type="submit" style={buttonStyles}>Signup</Button>
<p>*Please use a valid email address to sign up.</p>
</Form>
</div>

)

}



export default Signup; 

