import styled from 'styled-components';
import media from 'helpers/mediaHelper';

const AboutContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  ${media.tablet} {
    flex-direction: row;
    width: 768px;
  }

  ${media.desctop} {
    width: 1360px;
  }
`;
const PictureContainer = styled.div`
  ${media.tablet} {
    width: 368px;
    img {
      object-fit: cover;
      height: 589px;
    }
  }

  ${media.desctop} {
    width: 670px;
    img {
      height: 460px;
    }
  }
`;

export { AboutContainer, PictureContainer };
