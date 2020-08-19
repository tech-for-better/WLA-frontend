import React from 'react';

import * as SC from './styled-components';
import logo from '../../../assets/SkillsWest.London.png';

import Copy from './Copy';
import ExternalLinks from './ExternalLinks';
import InternalLinks from './InternalLinks';

const Footer: React.FC<{}> = () => (
  <SC.StyledFooter>
    <SC.FirstSection>
      <SC.Logo alt="SkillsWest.London logo" src={logo} />
      <Copy />
    </SC.FirstSection>
    <SC.Separator />
    <SC.SecondSection>
      <ExternalLinks />
      <InternalLinks />
    </SC.SecondSection>
  </SC.StyledFooter>
);

export default Footer;
