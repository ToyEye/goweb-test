import styled from 'styled-components';
import media from 'helpers/mediaHelper';

const AboutContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  ${media.tablet} {
    flex-direction: row;
  }
`;
const PictureContainer = styled.div`
  img {
    width: 100%;
  }
`;

export { AboutContainer, PictureContainer };
