import { useEffect } from 'react';
import axios from 'axios';

const apiBaseUrl = `http://api.lmiforall.org.uk/api/v1`;

export default function useSOC({ endpoint, soc, setWfData }) {
  useEffect(() => {
    axios.get(`${apiBaseUrl + endpoint}?soc=${soc}`).then((res) => {
      setWfData(res);
    });
  }, [soc, setWfData]);
}
