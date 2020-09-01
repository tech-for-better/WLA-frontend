import { useEffect } from 'react';
import axios from 'axios';

const apiBaseUrl = `http://api.lmiforall.org.uk/api/v1/o-net`;

export default function useONET({ endpoint, onetCode, setter, setError }) {
  useEffect(() => {
    axios
      .get(`${apiBaseUrl + endpoint}/${onetCode}`)
      .then((res) => {
        setter(res);
      })
      .catch(() => {
        setError(true);
      });
  }, [endpoint, onetCode, setter, setError]);
}
