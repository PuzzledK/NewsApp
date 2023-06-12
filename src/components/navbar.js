import React from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';
 export let Navbar = (props) => {
   return (
   <nav className='nav'>
    <li style={{fontFamily:'cursive',color:'gold'}}>{props.title}</li>
    <li style={{'paddingLeft': '1rem','fontSize':'1.8rem'}}><Link href='/'>Home</Link></li>
    <li style={{'paddingLeft': '1rem','fontSize':'1.8rem'}}><Link href='/'>About Us</Link></li>
   </nav>
   );
}
