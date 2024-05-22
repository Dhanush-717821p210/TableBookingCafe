import React from 'react';
import { Link } from 'react-router-dom'
const Navbar = () => {

  return (
    <>
    <nav className='navStyle'>
      <div className="name">
        JR CAFE
      </div>
      <div className='linkStyle'>
        <Link to='/home' style={{color:'white'}}>
          HOME
          </Link>
        <Link to='/About' style={{color:'white'}}> 
          &nbsp;&nbsp;&nbsp;ABOUT
          </Link>
        <Link to='/Menu' style={{color:'white'}}> 
        &nbsp;&nbsp;&nbsp;MENU
        </Link>
        <Link to='/Contact' style={{color:'white'}}> 
        &nbsp;&nbsp;&nbsp;BOOKING
        </Link>
        <Link to='/Login' style={{color:'white'}}>
        &nbsp;&nbsp;&nbsp;<button >LOGIN</button>
        </Link>
      </div>
    </nav>
   
    </>
  );
};

export default Navbar;
