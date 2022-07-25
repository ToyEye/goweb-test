import React from 'react';
import { Button } from 'components/reusableComponents';
import { Text } from './TextContainer.styled';

const TextContainer = ({
  main = false,
  title,
  solutions,
  about,
  btnText,
  blog = false,
}) => {
  return (
    <Text main={main} blog={blog}>
      <p className="text">{title}</p>
      <h2 className="solutions">{solutions}</h2>
      <p className="about">{about}</p>
      <Button>{btnText}</Button>
    </Text>
  );
};

export default TextContainer;
