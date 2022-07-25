import styled from 'styled-components';
import media from 'helpers/mediaHelper';

const CasesStyledContainer = styled.div`
  padding-left: 20px;
  padding-right: 20px;
  padding-top: 40px;
  padding-bottom: 40px;
  text-align: center;
  color: ${props => props.theme.colors.darkColor};

  h2 {
    font-size: 38px;
    font-weight: 300;
    line-height: 1.26;
    padding: 0 20px;
  }

  .casesText {
    font-size: 18px;
    line-height: 1.66;
    margin-bottom: 20px;
  }

  .aboutImages {
    font-size: 16px;
    line-height: 1.6;
    margin-top: 24px;
    margin-bottom: 20px;
  }

  ${media.tablet} {
    padding-left: 32px;
    padding-right: 32px;
    .casesText {
      font-size: 20px;
      line-height: 1.64;
      margin-bottom: 24px;
    }

    .aboutImages {
      line-height: 1.56;
      margin-top: 26px;
      margin-bottom: 24px;
    }
  }

  ${media.desctop} {
    padding: 80px 28px;
  }
`;

const ListStyled = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;

  li {
    width: 280px;
    margin-bottom: 8px;
    :last-child {
      margin-bottom: 0;
    }

    :hover {
      opacity: 0.8;
    }
  }

  img {
    width: 100%;
  }

  ${media.tablet} {
    justify-content: space-around;
    li {
      width: 223px;

      :nth-child(-n + 3) {
        margin-bottom: 18px;
      }

      :nth-child(3n) {
        margin-right: 0;
      }
    }
  }

  ${media.desctop} {
    li {
      width: 421px;

      :nth-child(-n + 3) {
        margin-bottom: 24px;
      }
    }
  }
`;

export { CasesStyledContainer, ListStyled };
