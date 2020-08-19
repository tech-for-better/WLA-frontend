const styles = {
  grey: `#363636`,
  breakpoint: `600px`,
  font: {
    // This is an implementation of the modular scale
    0: `0.66em`,
    1: `1em`,
    2: `1.5em`,
    3: `2.25em`,
    4: `3.375em`,
    5: `5.063em`,
    6: `7.594em`,
  },
};

export const mediaQuery = (content) => `
@media only screen and (max-width: ${styles.breakpoint}) {
${content}
}
`;

export default styles;
