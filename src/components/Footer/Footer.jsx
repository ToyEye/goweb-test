import React from 'react';
import { FooterStyled, List } from './Footer.styled';
import { FaFacebook, FaLinkedinIn } from 'react-icons/fa';
import { BsTwitter, BsYoutube } from 'react-icons/bs';

const Footer = () => {
  return (
    <FooterStyled>
      <List>
        <li>
          <a href="facebook.com">
            <FaFacebook className="icon" />
          </a>
        </li>
        <li>
          <a href="twitter.com">
            <BsTwitter className="icon" />
          </a>
        </li>
        <li>
          <a href="youtube.com">
            <BsYoutube className="icon" />
          </a>
        </li>
        <li>
          <a href="linkedin.com">
            <FaLinkedinIn className="icon" />
          </a>
        </li>
      </List>
      <p className="since">Copyright © 2021 - FinanceLedger</p>
    </FooterStyled>
  );
};

export default Footer;
