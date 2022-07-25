import React from 'react';
import { TextContainer } from 'components/reusableComponents/TextContainer/TextContainer.styled';
import aboutWebOne from 'images/home/people.webp';
import aboutWebSecond from 'images/home/people@2x.webp';
import aboutJpgOne from 'images/home/people.jpg';
import aboutJpgSecond from 'images/home/people@2x.jpg';
import { Text } from 'components/reusableComponents';
import { AboutContainer, PictureContainer } from './About.styled';
const title = 'What you are looking for';
const solutions = 'We provide bespoke solutions';
const about =
  'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptate,ipsum dignissimos quae laudantium asperiores nam aliquid impedit harum illum dolore explicabo ab dolores itaque rerum temporibus doloribus iste maiores deleniti?';

const About = () => {
  return (
    <TextContainer id="about">
      <AboutContainer>
        <PictureContainer>
          <picture>
            <source
              srcSet={`${aboutWebOne} 1x, ${aboutWebSecond} 2x`}
              type="image/webp"
            />
            <source
              srcSet={`${aboutJpgOne} 1x, ${aboutJpgSecond} 2x,`}
              type="image/jpeg"
            />
            <img src={aboutJpgOne} alt="about" />
          </picture>
        </PictureContainer>
        <Text
          main
          title={title}
          solutions={solutions}
          about={about}
          btnText="Read More"
        />
      </AboutContainer>
    </TextContainer>
  );
};

export default About;
