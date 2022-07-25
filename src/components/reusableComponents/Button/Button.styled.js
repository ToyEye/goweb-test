import styled from 'styled-components';

const ButtonStyled = styled.button`
  display: block;
  text-align: center;
  font-size: 16px;
  line-height: 1.6;
  color: ${props => props.theme.colors.lightColor};
  background-color: ${props => props.theme.colors.secondaryColor};
  border: 1px solid ${props => props.theme.colors.lightColor};
  border-radius: 5px;
  padding: 10px 36px;
`;

export default ButtonStyled;
