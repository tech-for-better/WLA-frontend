interface SOCChart {
  name: string;
  soc: string;
  color: string;
}

interface ONETChart {
  name: string;
  onetCode: string;
  color: string;
}

type MotherChart = SOCChart & ONETChart;
