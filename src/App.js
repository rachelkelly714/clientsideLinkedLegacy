import React, {useState, useEffect} from 'react';
import background from "./Assets/swordbg.jpg";
import './App.css';
import {Link} from 'react-router-dom'


/*Components*/ 
import Sitebar from './components/Navbar';
import Auth from './Auth/Auth';
import Charinfo from './components/Charinfo';
import Charactersheet from './components/Charactersheet';
import Gearsheet from './components/Gearsheet';
import Resources from './components/Resources';




function App() {

  const [sessionToken, setSessionToken] = useState(localStorage.getItem('token')?localStorage.getItem('token') : null )
useEffect(() => {
    if(localStorage.getItem('token')){
        setSessionToken(localStorage.getItem('token'));
    }
}, [])

const updateToken = (newToken) => {
    localStorage.setItem('token', newToken);
    setSessionToken(newToken);
    console.log(newToken); 
  }
  
  const clearToken = () => {
    localStorage.clear();
    setSessionToken('');
  }

const protectedViews = () => { 
  return (sessionToken === localStorage.getItem('token') ? <Charactersheet token={sessionToken}/> : <Auth updateToken={updateToken}/>)
}

const protectedViews2 = () => { 
  return (sessionToken === localStorage.getItem('token')? <Gearsheet token={sessionToken}/> : <Auth updateToken={updateToken}/>)
}
// const protectedViewsGear = () => { 
//   return (sessionToken === localStorage.getItem('token') ? <Gear token={sessionToken}/> : <Auth updateToken={updateToken}/>)
// }

const pStyles = {
  color: 'white',
  fontSize: '20px'
}
  return (
    <div style={{backgroundImage: `url(${background})`}} >
     <Sitebar clickLogout={clearToken} />

     <h3 style={pStyles}>New to Pathfinder? Resources below!</h3>
      <Link to = "/Resources">Resources</Link>
      
   

     {protectedViews()}
     {protectedViews2()}
     

    </div>
  );
}

export default App;
