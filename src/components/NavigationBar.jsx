import React from 'react';
import { Link } from '@reach/router';
import { FaBoxes } from 'react-icons/fa';
import { BsListCheck, BsLayoutWtf, BsCardList } from 'react-icons/bs';

import '../assets/styles/components/NavigationBar.scss';

const SIZE = '25px';
const NavigationBar = () => {

  return (
    <nav className='navbar'>

      <Link className='navbar-link' to='/'>
        <BsLayoutWtf size={SIZE} />
      </Link>
      <Link className='navbar-link' to='/lists'>
        <BsListCheck size={SIZE} />
      </Link>
      <Link className='navbar-link' to='/packer'>
        <FaBoxes size={SIZE} />
      </Link>
      <Link className='navbar-link' to='/log'>
        <BsCardList size={SIZE} />
      </Link>

    </nav>
  );
};

export default NavigationBar;
