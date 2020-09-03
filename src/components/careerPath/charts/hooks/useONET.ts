import { useEffect } from 'react';
import axios from 'axios';

const apiBaseUrl = `http://api.lmiforall.org.uk/api/v1/o-net`;

export default function useONET({ endpoint, onet, setter, setError }) {
  useEffect(() => {
    axios
      .get(`${apiBaseUrl + endpoint}/${onet}`)
      .then((res) => {
        setter(res);
      })
      .catch(() => {
        setError(true);
      });
  }, [endpoint, onet, setter, setError]);
}
