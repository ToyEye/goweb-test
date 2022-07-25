import styled from 'styled-components';

const FooterStyled = styled.div`
  background-color: ${props => props.theme.colors.darkColor};
  padding: 20px 0;

  .since {
    text-align: center;
    color: ${props => props.theme.colors.lightColor};
    font-size: 16px;
    line-height: 1.6;
  }
`;

const List = styled.ul`
  display: flex;
  margin-bottom: 8px;
  justify-content: center;

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
      fill: ${props => props.theme.colors.secondaryColor};
    }
  }
`;

export { FooterStyled, List };
