import axios from 'axios';

const apiBaseUrl = `http://api.lmiforall.org.uk/api/v1`;

interface FetchedData {
  estimatePay: [];
  unemploymentRate: [];
  numberOfVacancies: number;
  skills: [];
  courses: [];
  predictedEmployment: [];
  replacementDemand: {};
}

function lmi4AllData(lmiCode, name) {
  const lmiData = {};

  function getSkills() {
    return axios
      .get(`${apiBaseUrl}/o-net/soc2onet/${lmiCode}`)
      .then((data) => {
        return data.data.onetCodes[0].code;
      })
      .then((code) => {
        return axios.get(`${apiBaseUrl}/o-net/skills/${code}`);
      })
      .catch((errors) => {
        throw new Error(errors);
      });
  }

  axios
    .all([
      axios.get(`${apiBaseUrl}/ashe/estimatePay`, { params: { soc: lmiCode } }),
      axios.get(`${apiBaseUrl}/lfs/unemployment`, { params: { soc: lmiCode } }),
      axios.get(`${apiBaseUrl}/vacancies/search`, { params: { keywords: name } }),
      getSkills(),
      axios.get(`${apiBaseUrl}/hesa/courses/${lmiCode}`),
      axios.get(`${apiBaseUrl}/wf/predict`, { params: { soc: lmiCode } }),
      axios.get(`${apiBaseUrl}/wf/replacement_demand`, { params: { soc: lmiCode } }),
    ])
    .then(
      axios.spread((...responses) => {
        lmiData.estimatePay = responses[0].data.series;
        lmiData.unemploymentRate = responses[1].data.years;
        lmiData.numberOfVacancies = responses[2].data.length;
        lmiData.skills = responses[3].data.scales;
        lmiData.courses = responses[4].data.years;
        lmiData.predictedEmployment = responses[5].data.predictedEmployment;
        lmiData.replacementDemand = responses[6].data;
      }),
    )
    .catch((errors) => {
      throw new Error(errors);
    });
  return lmiData;
}

export default lmi4AllData;
