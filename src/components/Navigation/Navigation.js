import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import Avatar from '../../images/avatar.svg'
import Burger from '../Burger/Burger';
import './Navigation.css';
import '../Animation/Animation.css';

function Navigation({ handleBurgerClick }) {
  return (
    <>
      <Burger handleBurgerClick={handleBurgerClick} />
      <span className='menu__blur' />
      <nav className='menu'>
        <span>
          <NavLink to='/' onClick={handleBurgerClick} className='menu__link menu__link-span animation__link' activeclassname='active' >Главная</NavLink>
        </span>
        <ul className='menu__list menu__list-movies'>
          <li className='menu__link-movies animation__link'><NavLink onClick={handleBurgerClick} className='menu__link menu__text-movies' activeclassname='active' to='/movies'>Фильмы</NavLink></li>
          <li className='menu__link-movies animation__link'><NavLink onClick={handleBurgerClick} className='menu__link menu__text-save-movies' activeclassname='active' to='/saved-movies'>Сохранённые фильмы</NavLink></li>
        </ul>
        <ul className='menu__list'>
          <li className='animation__link'><NavLink onClick={handleBurgerClick} className='menu__link menu__text-profile' activeclassname='active' to='/profile'>Аккаунт</NavLink></li>
          <li className='menu__avatar-container animation__button'><Link onClick={handleBurgerClick} className='menu__link' to='/profile'><img className='menu__avatar' alt="Иконка аватара. Силуэт портрета человечика." src={Avatar} /></Link></li>
        </ul>
      </nav >
    </>
  );
}

export default Navigation;