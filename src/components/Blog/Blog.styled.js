import styled from 'styled-components';
import media from 'helpers/mediaHelper';

const BlogContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  ${media.tablet} {
    flex-direction: row-reverse;
  }
`;
const PictureContainer = styled.div`
  img {
    width: 100%;
  }
`;

export { BlogContainer, PictureContainer };
