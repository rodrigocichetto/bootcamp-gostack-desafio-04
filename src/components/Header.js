import React from 'react';

import './Header.css';
import logo from '../assets/imgs/logo.svg';

function Header() {
  return (
    <header className="header">
      <nav>
        <img className="logo" src={logo} />
        <div className="my-profile">
          Meu perfil
          <i className="material-icons">account_circle</i>
        </div>
      </nav>
    </header>
  );
}

export default Header;
