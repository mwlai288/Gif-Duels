import React from 'react';
import Accounts from './Accounts';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div>
      <Accounts />
      <Link to="/hall">Hall of Fame</Link>
      <Link to="/voting">To Battle</Link>
    </div>
  );
};

export default Header;
