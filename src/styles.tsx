const styles = {
  sage: `#95AB00`,
  lightBlue: `#0082FA`,
  aqua: `#006574`,
  orange: `#FF5200`,
  gold: `#FFB300`,
  claret: `#95122C`,
  white: `#FFF`,
  grey: `#666`,
  darkGrey: `#2e2e2e`,
  errorRed: `#ed3737`,
  confirmationGreen: `#0cc92b`,
  breakpoints: {
    mobileMainWidth: `769px`,
    desktopMainWidth: `1140px`,
  },
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
  cardShadow: `0px 0px 14px -3px rgba(0, 0, 0, 0.5)`,
};

export const mediaQuery = (content) => {
  return `
@media only screen and (max-width: ${styles.breakpoints.mobileMainWidth}) {
${content}
}
`;
};

export default styles;
