import React from 'react'
import logoSportfy from '../assets/logo/spotify-logo.png'
import { Link } from 'react-router-dom'

const Header = () => {
  return <div className="header">
    <Link to="/">
     <img src={logoSportfy} alt="Logo do Sportfy" />
    </Link>
    <Link to="/" className='header__link'>
        <h1>Sportify</h1>
    </Link>
  </div>
}

export default Header
