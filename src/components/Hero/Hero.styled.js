import styled from 'styled-components';
import showcaseJpgOne from '../../images/home/showcase.jpg';
import showcaseJpgSecond from '../../images/home/showcase@2x.jpg';
import showcaseWebpOne from '../../images/home/showcase.webp';
import showcaseWebpSecond from '../../images/home/showcase@2x.webp';
import media from 'helpers/mediaHelper';

const HeroContainer = styled.div`

  margin-right: auto;
  margin-left: auto;
  padding-bottom: 96px;
  padding-top: 142px;
  padding-left: 22px;
  padding-right: 22px;

  background-image: linear-gradient(
      0deg,
      rgba(0, 0, 0, 0.4),
      rgba(0, 0, 0, 0.4)
    ),
    image-set(
      url(${showcaseWebpSecond}) 2x,
      url(${showcaseWebpOne}) 1x,
      url(${showcaseJpgSecond}) 2x,
      url(${showcaseJpgOne}) 1x
    );

  background-image: linear-gradient(
      0deg,
      rgba(0, 0, 0, 0.4),
      rgba(0, 0, 0, 0.4)
    ),
    -webkit-image-set(url(${showcaseWebpSecond}) 2x, url(${showcaseWebpOne}) 1x, url(${showcaseJpgSecond})
          2x, url(${showcaseJpgOne}) 1x);

  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  ${media.tablet} {
    padding-left: 32px;
    padding-right: 32px;
    padding-top: 20px;
    padding-bottom: 410px;
  }
  ${media.desctop} {
    padding-top: 12px;
    padding-left: 28px;
    padding-right: 28px;
    padding-bottom: 282px;
  }
`;

const MainStyled = styled.div`
  text-align: center;
  margin-top: 40px;
  color: ${props => props.theme.colors.titleColor};
  padding-left: 37px;
  padding-right: 37px;
  .arrow {
    display: none;
  }
  .title {
    font-weight: ${props => props.theme.weights.light};
    font-size: 52px;
    line-height: 1.26;
  }

  .text {
    font-size: 22px;
    line-height: 1.6;
    margin-top: 20px;
    margin-bottom: 24px;
  }

  .button {
    margin: 0 auto;
    border: none;

    :hover {
      background-color: ${props => props.theme.colors.btnHoverOpacity};
    }
  }

  ${media.tablet} {
    margin-top: 350px;

    .button {
      display: flex;
      align-items: center;
      font-size: 18px;
    }
    .arrow {
      display: block;
      width: 16px;
    }
    .title {
      font-size: 55px;
    }
    .text {
      margin-top: 24px;
      margin-bottom: 32px;
    }
  }

  ${media.desctop} {
    margin-top: 230px;
  }
`;

export { HeroContainer, MainStyled };
