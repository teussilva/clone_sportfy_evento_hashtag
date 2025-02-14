import React from 'react'
import logoSportfy from '../assets/logo/spotify-logo.png'

const Header = () => {
  return <div className="header">
    <img src={logoSportfy} alt="Logo do Sportfy" />
    <a className='header__link' href="/">
        <h1>Sportify</h1>
    </a>
  </div>
}

export default Header
