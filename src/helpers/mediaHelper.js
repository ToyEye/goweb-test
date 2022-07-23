const customMediaQuery = minWidth => `@media (min-width: ${minWidth}px)`;

const media = {
  custom: customMediaQuery,
  tablet: customMediaQuery(768),
  desctop: customMediaQuery(1360),
};

export default media;
