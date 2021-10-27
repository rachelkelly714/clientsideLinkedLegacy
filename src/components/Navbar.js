import {Collapse, 
   Navbar, 
   NavbarBrand, 
   NavbarToggler, 
   Nav, 
   NavItem, 
   Button, NavLink} from 'reactstrap' 

   import logo from './Assets/linkedlegacylgk.png'


   
import {useState} from 'react';
import './Nav.css'



const Sitebar = (props) => {

   const [isOpen, setIsOpen] = useState(false); 

   const toggle = () => {
       let newIsOpen = !isOpen;
       setIsOpen(newIsOpen); 
   }


const navBrandStyles = {
  fontSize: '30px'
}

const buttonStyles = {
  fontSize: '25px',
  marginLeft: '900px',
}



return (
 <Navbar className="Navbar" light expand="md">
   <img src={logo} href="/" alt="logo"/>
   <NavbarBrand style={navBrandStyles} href="/">Welcome to Linked Legacy!</NavbarBrand>
   <NavbarToggler onClick={toggle} />
   <Collapse isOpen={isOpen} navbar>
     <Nav className="ml-auto" navbar>
   
       <NavItem>
         <Button style={buttonStyles}  onClick={props.clickLogout} btnClass=".btn">Logout</Button>
       </NavItem>
     </Nav>
   </Collapse>
 </Navbar>
);

}

export default Sitebar; 