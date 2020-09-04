import React from 'react';
import styled from 'styled-components';
import partners from './copy';

const PartnerStrip = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
`;

const Partner = styled.img`
  height: 7em;
  width: auto;
`;

const Partners: React.FC<{}> = () => {
  return (
    <PartnerStrip>
      {partners.map((partner) => {
        return (
          <a href={partner.link} key={partner.alt} target="_blank" rel="noreferrer">
            <Partner src={partner.image} alt={partner.alt} />
          </a>
        );
      })}
    </PartnerStrip>
  );
};

export default Partners;
