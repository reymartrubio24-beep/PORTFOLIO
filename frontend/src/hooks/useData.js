import { useState, useEffect } from 'react';
import axios from 'axios';

const useData = (endpoint) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`/api/${endpoint}`);
        setData(res.data);
        setLoading(false);
      } catch (err) {
        console.error(`Error fetching ${endpoint}:`, err);
        setError(`Failed to load ${endpoint}.`);
        setLoading(false);
      }
    };

    fetchData();
  }, [endpoint]);

  return { data, loading, error };
};

export default useData;
