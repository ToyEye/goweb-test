import React from 'react';
import logo from 'images/fa-solid_book-open.png';
import {
  NavigationContainer,
  LogoContainer,
  ListContainer,
} from './Navigation.styled';

const Navigation = () => {
  window.onscroll = () => {
    const scroll = document.querySelector('.header');
    const Y = window.scrollY;
    if (
      /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        navigator.userAgent && Y > 120
      )
    ) {
      scroll.classList.add('fixed');
    } else {
      scroll.classList.add('fixed');
    }
  };

  return (
    <NavigationContainer className="header">
      <div className="navigationContainer">
        <LogoContainer>
          <img className="img" src={logo} alt="logo" />
          <p className="text">
            <span className="colorChange">Finance</span>Ledger
          </p>
        </LogoContainer>
        <nav>
          <ListContainer>
            <li>
              <a className="link" href="#home">
                Home
              </a>
            </li>
            <li>
              <a className="link" href="#about">
                About
              </a>
            </li>
            <li>
              <a className="link" href="#cases">
                Cases
              </a>
            </li>
            <li>
              <a className="link" href="#blog">
                Blog
              </a>
            </li>
            <li>
              <a className="link" href="#contact">
                Contact
              </a>
            </li>
          </ListContainer>
        </nav>
      </div>
    </NavigationContainer>
  );
};

export default Navigation;
