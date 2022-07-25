import styled from 'styled-components';
import media from 'helpers/mediaHelper';

const TextContainer = styled.div`
  img {
    width: 320px;
  }
`;

const Text = styled.div`
  padding: 40px 30px;
  background-color: ${props =>
    props.main
      ? props.theme.colors.secondaryColor
      : props.theme.colors.thirdyColor};
  color: ${props => props.theme.colors.lightColor};

  .text {
    font-size: 18px;
    line-height: 1.66;
    margin-bottom: 8px;
  }
  .solutions {
    font-size: 38px;
    line-height: 1.26;
    font-weight: ${props => props.theme.weights.light};
    margin-bottom: 24px;
  }

  .about {
    font-size: 16px;
    line-height: 1.6;
    margin-bottom: 24px;
  }

  button {
    background-color: ${props => props.blog && props.theme.colors.thirdyColor};

    :hover {
      background-color: ${props => props.theme.colors.lightColor};
      color: ${props =>
        props.main
          ? props.theme.colors.secondaryColor
          : props.theme.colors.thirdyColor};
    }
  }

  ${media.tablet} {
    padding-left: 32px;
    padding-right: 32px;

    .text {
      font-size: 20px;
    }

    .about {
      font-size: 18px;
    }

    button {
      font-size: 18px;
    }
  }

  ${media.desctop} {
    padding: 80px 64px 80px 20px;
  }
`;

export { Text, TextContainer };
