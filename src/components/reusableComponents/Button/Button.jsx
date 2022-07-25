import React from 'react';
import ButtonStyled from './Button.styled';

const Button = ({ label, children, type = 'button', className, onClick }) => {
  return (
    <ButtonStyled type={type} className={className} onClick={onClick}>
      {label || children}
    </ButtonStyled>
  );
};

export default Button;
