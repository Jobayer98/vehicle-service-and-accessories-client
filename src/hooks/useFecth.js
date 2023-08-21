import axios from "axios";
import { useEffect, useState } from "react";

const useFetch = (url) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await axios.get(url);
      setData(data.data);
    };
    fetchData();
  }, [url]);

  return [data];
};

export default useFetch;
