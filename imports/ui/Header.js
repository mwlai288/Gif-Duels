import React from 'react';
import Accounts from './Accounts';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div>
      <Accounts />
      <Link to="/">Home</Link>
      <Link to="/hall">Hall of Fame</Link>
      <Link to="/voting">To Battle</Link>
      <Link to="/search">Find A Gif</Link>
    </div>
  );
};

export default Header;
