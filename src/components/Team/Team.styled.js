import styled from 'styled-components';

import media from 'helpers/mediaHelper';
const ContactsContainer = styled.div``;

const TeamContainer = styled.div`
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

  .teamText {
    font-size: 18px;
    line-height: 1.66;
    margin-bottom: 20px;
  }

  .aboutTeam {
    font-size: 16px;
    line-height: 1.6;
    margin-top: 24px;
    margin-bottom: 20px;
  }

  ${media.tablet} {
    padding-left: 32px;
    padding-right: 32px;

    .teamText {
      font-size: 20px;
      line-height: 1.64;
      margin-bottom: 24px;
    }

    .aboutTeam {
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

  img {
    width: 100%;
  }

  .item {
    width: 280px;
    margin-bottom: 20px;

    :last-child {
      margin-bottom: 0;
    }
  }

  .name {
    margin-top: 16px;
    font-size: 23px;
    line-height: 1.25;
  }

  .role {
    margin-top: 12px;
    font-size: 16px;
    line-height: 1.6;
  }

  .iconList {
    display: none;
  }

  ${media.tablet} {
    justify-content: space-around;

    .item {
      width: 223px;
      margin-bottom: 0;
    }

    .name {
      font-size: 25px;
      margin-top: 14px;
    }

    .role {
      font-size: 18px;
      margin-top: 12px;
    }
  }

  ${media.desctop} {
    justify-content: space-between;

    .item {
      width: 421px;
    }

    img {
      opacity: 1;
      transition: opacity 124ms linear, transform 124ms linear;
    }
    .foto {
      position: relative;
      background-color: black;
      overflow: hidden;

      :hover {
        img {
          box-shadow: 2px 2px 12px 2px rgba(0, 0, 0, 0.4);
          opacity: 0.3;
        }

        .iconList {
          position: absolute;
          transform: translate(-50%, -50%);
          top: 50%;
          left: 50%;
          display: flex;
          justify-content: center;
          align-items: center;

          li {
            margin-right: 25px;

            :last-child {
              margin-right: 0;
            }
          }
          .icon {
            width: 35px;
            height: 35px;
            fill: white;

            :hover {
              opacity: 0.8;
            }
          }
        }
      }
    }

    .name {
      margin-top: 20px;
    }
  }
`;

export { ContactsContainer, TeamContainer, ListStyled };
