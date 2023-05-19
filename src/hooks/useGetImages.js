import { useEffect, useState } from "react";
import filterfunc from "../helpers/filter";
let localCache = [];

const useGetImages = (filter = "") => {
  const [blasons, setBlason] = useState([]);
  const [status, setStatus] = useState("unloaded");
  useEffect(() => {
    if (localCache.length === 0) {
      requestData();
    } else if (localCache.length > 0) {
      setBlason(localCache.filter(filterfunc(filter)));
      setStatus("loaded");
    }
    async function requestData() {
         const apiRep = await fetch(
           "https://restcountries.com/v3.1/all"
         );
         const json = await apiRep.json();
         setBlason(json.filter(filterfunc(filter)))
         localCache = json || [];
         setStatus("loaded");

    }
   
  }, [filter]);
  return [status, blasons];
};

export default useGetImages;
