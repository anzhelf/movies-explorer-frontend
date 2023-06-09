import React, { useState } from 'react';
import logo from '../../images/logo.svg';
import { Link } from 'react-router-dom';
import './Header.css';
import '../Animation/Animation.css';
import Navigation from '../Navigation/Navigation';
import NavTab from '../NavTab/NavTab';

function Header({ theme, loggedIn }) {
  const [isBurgerMenuOpen, setIsBurgerMenuOpen] = useState(false);

  function handleBurgerClick() {
    setIsBurgerMenuOpen(!isBurgerMenuOpen);
  }

  return (
    // open, при добавлении класса открывается бургер меню
    <header className={`header ${theme ? 'theme' : ''} ${isBurgerMenuOpen ? 'opened' : ''}`}>

      <Link className='animation__button' to='/'>
        <img className='header__logo' alt="Логотип сайта. Черный круг." src={logo} />
      </Link>

      {loggedIn ? <Navigation handleBurgerClick={handleBurgerClick} /> : <NavTab />}

    </header>
  );
}

export default Header;