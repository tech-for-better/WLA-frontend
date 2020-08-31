import React from 'react';
import styled from 'styled-components';

// import Card from 'react-bootstrap/esm/Card';
// import { CardGroupStyle, StyledCard } from '../../../templates/sharedStyles.styles';
// import Graph1 from '../../../assets/temp/lc1.png';
// import Graph2 from '../../../assets/temp/lc2.png';
// import Graph3 from '../../../assets/temp/dc.png';
// import DonutChart from '../d3charts/d3donutChart';
// import SparklineChart from '../../d3charts/d3areaChart';

import EstimatedPay from './EstimatedPay';
import WorkingFutures from './WorkingFutures';

// const ReverseCardGroupStyle = styled(CardGroupStyle)`
//   grid-template-columns: 35% 60%;
// `;
// const GraphImg = styled.img`
//   width: 100%;
// `;
const Charts: React.FC<{ soc: string; name: string }> = ({ soc, name }) => {
  return (
    <div>
      <WorkingFutures soc={soc} />
      <EstimatedPay soc={soc} />
    </div>
  );
  // );
  // return (
  //   <div className="mb-5">
  //     <h2 className="mb-4">
  //       Statistical Data About <strong>{name}</strong>
  //     </h2>
  //     <ReverseCardGroupStyle className="mb-5 mt-5">
  //       <div style={{ width: `100%` }}>
  //         <StyledCard className="mb-3">
  //           <Card.Body>
  //             <Card.Title className="mb-4">
  //               <strong>Average Salary</strong>
  //             </Card.Title>
  //             <GraphImg src={Graph1} />
  //             {/* {lmiData.loading ? (
  //               `loading`
  //             ) : (
  //               <SparklineChart estimatePay={lmiData.lmiData.estimatePay} />
  //             )} */}
  //           </Card.Body>
  //         </StyledCard>
  //         <StyledCard>
  //           <Card.Body>
  //             <Card.Title className="mb-4">
  //               <strong>Employment Rate</strong>
  //             </Card.Title>
  //             <GraphImg src={Graph2} />
  //           </Card.Body>
  //         </StyledCard>
  //       </div>
  //       <StyledCard>
  //         <Card.Body>
  //           <Card.Title className="mb-4">
  //             <strong>Courses taken to become {name}</strong>
  //           </Card.Title>
  //           <GraphImg src={Graph3} />
  //         </Card.Body>
  //       </StyledCard>
  //     </ReverseCardGroupStyle>
  //     <p>
  //       <StyledCard>
  //         <Card.Body>
  //           <Card.Title className="mb-4">
  //             <strong>
  //               Another card that has infomration about current number of vacancies, replacemenet
  //               demand with a number over ceratin time of years. top skills in demand to become
  //               {` `}
  //               {name}.
  //             </strong>
  //             <WorkingFutures soc={soc} />
  //             <EstimatedPay />
  //           </Card.Title>
  //         </Card.Body>
  //       </StyledCard>
  //     </p>
  //     <p>
  //       <StyledCard>
  //         <Card.Body>
  //           <Card.Title className="mb-4">
  //             <strong>predicted Employment</strong>
  //             <DonutChart />
  //           </Card.Title>
  //         </Card.Body>
  //       </StyledCard>
  //     </p>
  //   </div>
  // );
};

export default Charts;
