import React from 'react';

import * as SC from './styled-components';
import logo from '../../../assets/SkillsWest.London.png';

import ExternalLinks from './ExternalLinks';
import InternalLinks from './InternalLinks';

const Footer: React.FC<{}> = () => (
  <SC.StyledFooter>
    <SC.FirstSection>
      <h3>Result of a page query</h3>
      <p>
        Lorem ipsum P dolor sit amet consectetur adipisicing elit. Impedit,
        similique sapiente laboriosam illo nobis voluptate hic quas perspiciatis
        veritatis, quibusdam distinctio? Doloremque ducimus assumenda unde hic
        sequi accusantium inventore ex.
      </p>
      <SC.Logo alt="SkillsWest.London logo" src={logo} />
    </SC.FirstSection>
    <SC.Separator />
    <SC.SecondSection>
      <ExternalLinks />
      <InternalLinks />
    </SC.SecondSection>
  </SC.StyledFooter>
);

export default Footer;
