import React from 'react';
import logo from '../../logo.svg';
import Nav from '../Nav/Nav';
import {Link} from 'react-router-dom'

const Header = () => {
  return (
    <header>
        <Link to="/"><img src={logo} alt=""/></Link>
        <Nav/>
    </header>
  );
};

export default Header;
// rsc