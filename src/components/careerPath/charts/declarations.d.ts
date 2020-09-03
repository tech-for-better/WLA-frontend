interface SOCChart {
  name: string;
  soc: string;
  color: string;
}

interface ONETChart {
  name: string;
  onet: string;
  color: string;
}

type MotherChart = SOCChart & ONETChart;
