interface SOCChart {
  name: string;
  soc: string;
}

interface ONETChart {
  name: string;
  onetCode: string;
}

type GenericChart = SOCChart & ONETChart;
