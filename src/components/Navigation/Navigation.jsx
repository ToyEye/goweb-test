import React, { useState, useEffect } from 'react';
import logo from 'images/fa-solid_book-open.png';
import {
  NavigationContainer,
  LogoContainer,
  ListContainer,
} from './Navigation.styled';

const Navigation = () => {
  const [scroll, setScroll] = useState(false);

  useEffect(() => {
    window.onscroll = () => {
      const Y = window.scrollY;
      if (
        /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
          navigator.userAgent
        ) &&
        Y > 125
      ) {
        setScroll(Y > 125);
      } else if (Y > 70) {
        setScroll(true);
      } else {
        setScroll(false);
      }
    };
  }, []);

  return (
    <NavigationContainer className="header" scroll={scroll}>
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
