import React from 'react';
import Navigation from 'components/Navigation';
import { HeroContainer, MainStyled } from './Hero.styled';
import { Button } from 'components/reusableComponents';
import arrow from 'images/gallery/next.png';

const Hero = () => {
  return (
    <HeroContainer id="home">
      {/* <Navigation /> */}
      <MainStyled>
        <h1 className="title">The Sky Is The Limit</h1>
        <p className="text">We provide world class financial assistance</p>
        <Button type="button" className="button">
          <img src={arrow} alt="arrow" className="arrow" />
          Read More
        </Button>
      </MainStyled>
    </HeroContainer>
  );
};

export default Hero;
