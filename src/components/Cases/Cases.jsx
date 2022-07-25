import React from 'react';
import images from './images';
import { CasesStyledContainer, ListStyled } from './Cases.styled';
const Cases = () => {
  return (
    <CasesStyledContainer id="cases">
      <p className="casesText">This is what we do</p>
      <h2>Business Cases</h2>
      <p className="aboutImages">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto,
        sapiente!
      </p>
      <ListStyled>
        {images &&
          images.map(({ id, caseJpg, caseJpgx, caseWeb, caseWebX }) => (
            <li key={id}>
              <picture>
                <source
                  srcSet={`${caseWeb} 1x, ${caseWebX} 2x`}
                  type="image/webp"
                />
                <source
                  srcSet={`${caseJpg} 1x, ${caseJpgx} 2x,`}
                  type="image/jpeg"
                />
                <img src={caseJpg} alt="about" />
              </picture>
            </li>
          ))}
      </ListStyled>
    </CasesStyledContainer>
  );
};

export default Cases;
