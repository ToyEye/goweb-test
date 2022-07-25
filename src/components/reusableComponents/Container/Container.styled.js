import styled from 'styled-components';
import media from 'helpers/mediaHelper';

const ContainerStyled = styled.div`
  margin: 0 auto;
  ${media.tablet} {
    width: 768px;
  }

  ${media.desctop} {
    width: 1360px;
  }
`;

export default ContainerStyled;
