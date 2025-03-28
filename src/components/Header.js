import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Header = () => {
  return (
	<header>
	  <h1 className="text-3xl font-bold underline">Justin Chill's blog</h1>
	  <nav>
		<NavLink to="/">About Me</NavLink>
		<NavLink to="/portfolio">Portfolio</NavLink>
		<NavLink to="/contact">Contact</NavLink>
		<NavLink to="/resume">Resume</NavLink>
	  </nav>
	</header>
  );
};

export default Header;
