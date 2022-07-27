import styled from 'styled-components';
import media from 'helpers/mediaHelper';

const ContactContainer = styled.div`
  background-color: ${props => props.theme.colors.formBgC};
  display: flex;
  flex-wrap: wrap;
  img {
    height: 100%;
  }

  ${media.tablet} {
    flex-wrap: nowrap;
  }
`;

const FormContainer = styled.div`
  padding: 40px 20px;

  h3 {
    font-weight: 300;
    font-size: 38px;
    line-height: 1.26;
    margin-bottom: 32px;
    color: ${props => props.theme.colors.darkColor};
  }
  label {
    position: relative;
  }

  .formInput {
    background: #ffffff;
    border: 1px solid #f5f5f5;
    outline: none;
    padding: 9px 0 7px 8px;
    border-radius: 0px;
    font-size: 16px;
    color: ${props => props.theme.colors.placeholderColor};
    line-height: 1.44;
    margin-bottom: 32px;
    width: 280px;
  }

  .error {
    display: flex;
    position: absolute;
    bottom: -10px;
    transform: translateY(100%);
    color: ${props => props.theme.colors.error};
  }

  .warning {
    width: 20px;
    height: 20px;
  }

  .button {
    margin: 0 auto;
    border: none;
    width: 100%;
    :hover {
      background-color: ${props => props.theme.colors.btnHoverOpacity};
    }
  }

  ${media.tablet} {
    padding-left: 32px;
    padding-right: 32px;

    .formInput {
      font-size: 18px;
      width: 324px;
    }
  }

  ${media.desctop} {
    width: 690px;
    padding: 80px 50px 80px 20px;
    .formInput {
      font-size: 18px;
      width: 620px;
    }
  }
`;

export { ContactContainer, FormContainer };
