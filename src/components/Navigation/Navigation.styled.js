import styled from 'styled-components';
import media from 'helpers/mediaHelper';

const NavigationContainer = styled.div`
  ${media.tablet} {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`;

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 12px;

  .img {
    width: 40px;
    height: 35px;
  }

  .text {
    font-size: 32px;
    line-height: 1.32;
    color: ${props => props.theme.colors.lightColor};
  }

  .colorChange {
    color: ${props => props.theme.colors.secondaryColor};
  }

  :hover {
    transform: scale(1.1);
    .text {
      color: rgba(255, 255, 255, 0.8);
    }
    .colorChange {
      color: rgba(40, 167, 69, 0.8);
    }
  }

  ${media.tablet} {
    margin-bottom: 0;

    .text {
      font-size: 35px;
      line-height: 1.2;
    }
  }
`;

const ListContainer = styled.ul`
  display: flex;
  justify-content: center;

  li {
    margin-right: 12px;
    :last-child {
      margin-right: 0;
    }
  }

  .link {
    font-size: 16px;
    line-height: 1.6;
    color: ${props => props.theme.colors.lightColor};

    :hover {
      border-bottom: 2px solid ${props => props.theme.colors.secondaryColor};
    }
  }

  ${media.tablet} {
    li {
      margin-right: 20px;
      :last-child {
        margin-right: 0;
      }
    }

    .link {
      font-size: 18px;
      line-height: 1.56;
    }
  }

  ${media.desctop} {
    li {
      margin-right: 40px;
      :last-child {
        margin-right: 0;
      }
    }
  }
`;

export { NavigationContainer, LogoContainer, ListContainer };
