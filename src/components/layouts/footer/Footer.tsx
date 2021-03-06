import React from 'react';

import * as SC from './styled-components';
import logo from '../../../assets/SkillsWest.London.png';

import Copy from './Copy';
import InternalLinks from './InternalLinks';

const Footer: React.FC<{}> = () => {
  return (
    <SC.StyledFooterBox>
      <SC.StyledFooterContent>
        <SC.FirstSection>
          <SC.Logo alt="SkillsWest.London logo" src={logo} />
          <Copy />
        </SC.FirstSection>
        <SC.Separator />
        <SC.SecondSection>
          <InternalLinks />
        </SC.SecondSection>
      </SC.StyledFooterContent>
    </SC.StyledFooterBox>
  );
};

export default Footer;
