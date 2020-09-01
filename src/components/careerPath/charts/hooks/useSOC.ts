import { useEffect } from 'react';
import axios from 'axios';

const apiBaseUrl = `http://api.lmiforall.org.uk/api/v1`;

export default function useSOC({ endpoint, soc, setter, setError }) {
  useEffect(() => {
    axios
      .get(`${apiBaseUrl + endpoint}?soc=${soc}`)
      .then((res) => {
        setter(res);
      })
      .catch(() => {
        setError(true);
      });
  }, [endpoint, soc, setter, setError]);
}
