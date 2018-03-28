import React from 'react';
import Accounts from './Accounts';
import { Link } from 'react-router-dom';
import { HeaderStyle } from '../styles/Styling';

const Header = () => {
  return (
    <HeaderStyle>
      <Accounts />
      <Link to="/">Home</Link>
      <Link to="/search">Find A Gif</Link>
      <Link to="/voting">To Battle</Link>
      <Link to="/hall">Hall of Fame</Link>
    </HeaderStyle>
  );
};

export default Header;
