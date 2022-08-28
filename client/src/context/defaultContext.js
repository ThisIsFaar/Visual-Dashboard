import { useState, useEffect, createContext } from 'react';
import { getData } from '../util/apiHelper';

export const defaultData = createContext();

const DefaultApp = ({ children }) => {
  const [data, setData] = useState([]);
  const [flag, setFlag] = useState(0);
  const [countryNameState, setCountryNameState] = useState([]);
  const [countryCountState, setCountryCountState] = useState([]);
  const [changedData, setChangedData] = useState([]);

  //Updating Relevance Context
  const [keyRelevanceState, setKeyRelevanceState] = useState([]);
  const [valueRelevanceState, setValueRelevanceState] = useState([]);
  useEffect(() => {
    let keyRelevance = [];
    let valueRelevance = [];
    const relevanceData = data.map((d) => {
      return d.relevance;
    });

    const maxValue = Math.max(...relevanceData);

    if (maxValue > 0) {
      let hashRelevance = new Array(maxValue + 1).fill(0);
      for (let i = 0; i < relevanceData.length; i++) {
        if (relevanceData[i] !== null) {
          hashRelevance[relevanceData[i]]++;
        }
      }

      for (let i = 0; i < hashRelevance.length; i++) {
        if (hashRelevance[i] !== 0) {
          keyRelevance.push(i);
          valueRelevance.push(hashRelevance[i]);
        }
      }
    }
    setKeyRelevanceState(keyRelevance);
    setValueRelevanceState(valueRelevance);
  }, [data]);

  //Updating Country Context
  useEffect(() => {
    let countryCount = [];
    let countryNames = [];
    for (let i = 0; i < data.length; i++) {
      if (!countryNames.includes(data[i].country) && data[i].country !== '') {
        countryNames.push(data[i].country);
      }
    }
    countryNames.sort();
    countryCount = Array(countryNames.length).fill(0);

    for (let i = 0; i < data.length; i++) {
      if (data[i].country !== '') {
        countryCount[countryNames.indexOf(data[i].country)]++;
      }
    }
    setCountryCountState(countryCount);
    setCountryNameState(countryNames);
  }, [data]);

  //Updating Likelihood Context
  const [keyLikelihoodState, setKeyLikelihoodState] = useState([]);
  const [valueLikelihoodState, setValueLikelihoodState] = useState([]);

  let keyLikelihood = [];
  let valueLikelihood = [];
  const likelihoodData = data.map((d) => {
    return d.likelihood;
  });

  const maxValue = Math.max(...likelihoodData);

  if (maxValue > 0) {
    let hashLikelihood = new Array(maxValue + 1).fill(0);
    for (let i = 0; i < likelihoodData.length; i++) {
      if (likelihoodData[i] !== null) {
        hashLikelihood[likelihoodData[i]]++;
      }
    }
    for (let i = 0; i < hashLikelihood.length; i++) {
      if (hashLikelihood[i] !== 0) {
        keyLikelihood.push(i);
        valueLikelihood.push(hashLikelihood[i]);
      }
    }
  }
  useEffect(() => {
    setKeyLikelihoodState(keyLikelihood);
    setValueLikelihoodState(valueLikelihood);
  }, [data]);

  //Updating Intensity Context
  const [keyIntensityState, setKeyIntenstityState] = useState([]);
  const [valueIntensityState, setValueIntenstityState] = useState([]);
  let keyIntensity = [];
  let valueIntensity = [];
  const intensityData = data.map((d) => {
    return d.intensity;
  });
  const maxValueI = Math.max(...intensityData);
  if (maxValueI > 0) {
    let hashIntensity = new Array(maxValueI + 1).fill(0);
    for (let i = 0; i < intensityData.length; i++) {
      if (intensityData[i] !== null) {
        hashIntensity[intensityData[i]]++;
      }
    }
    for (let i = 0; i < hashIntensity.length; i++) {
      if (hashIntensity[i] !== 0) {
        keyIntensity.push(i);
        valueIntensity.push(hashIntensity[i]);
      }
    }
  }
  useEffect(() => {
    setKeyIntenstityState(keyIntensity);
    setValueIntenstityState(valueIntensity);
  }, [data]);

  //Updating Region Context
  let regionNames = [];
  let chartData = [];
  let regionCount = [];
  for (let i = 0; i < data.length; i++) {
    if (!regionNames.includes(data[i].region) && data[i].region !== '') {
      regionNames.push(data[i].region);
    }
  }
  regionNames.sort();
  regionCount = Array(regionNames.length).fill(0);
  for (let i = 0; i < data.length; i++) {
    if (data[i].region !== '') {
      regionCount[regionNames.indexOf(data[i].region)]++;
    }
  }
  for (let i = 0; i < regionNames.length; i++) {
    let obj = {
      x: regionNames[i],
      y: regionCount[i],
    };
    chartData.push(obj);
  }
  const [regionNameState, setRegionNameState] = useState([]);
  const [regionCountState, setRegionCountState] = useState([]);
  const [chartDataState, setChartDataState] = useState(chartData);
  useEffect(() => {
    setRegionNameState(regionNames);
    setRegionCountState(regionCount);
    setChartDataState(chartData);
  }, [data]);

  //Updating Topic Context
  let topicNames = [];
  let topicCount = [];

  for (let i = 0; i < data.length; i++) {
    if (!topicNames.includes(data[i].topic) && data[i].topic !== '') {
      topicNames.push(data[i].topic.toLowerCase());
    }
  }
  topicNames.sort();
  topicCount = Array(topicNames.length).fill(0);

  for (let i = 0; i < data.length; i++) {
    if (data[i].topic !== '') {
      topicCount[topicNames.indexOf(data[i].topic)]++;
    }
  }
  const [topicNameState, setTopicNameState] = useState([]);
  const [topicCountState, setTopicCountState] = useState([]);
  useEffect(() => {
    setTopicCountState(topicCount);
    setTopicNameState(topicNames);
  }, [data]);

  //Pestle Filter Context
  const [pestleFilters, setPestleFilters] = useState([]);
  const [filtersAdded, setFiltersAdded] = useState([]);
  useEffect(() => {
    let allData = [...data, ...changedData];
    let filters = allData.map((d) => {
      return d.pestle;
    });
    let availableFilters = [];

    for (let i = 0; i < filters.length; i++) {
      if (!availableFilters.includes(filters[i]) && filters[i] !== '') {
        availableFilters.push(filters[i]);
      }
    }
    setPestleFilters(availableFilters);
  }, [data, changedData]);

  //Source Filter Context
  const [sourceFilters, setSourceFilters] = useState([]);
  const [sourcefiltersAdded, setSourceFiltersAdded] = useState([]);
  useEffect(() => {
    let allData = [...data, ...changedData];
    let filters = allData.map((d) => {
      return d.source;
    });
    let availableFilters = [];

    for (let i = 0; i < filters.length; i++) {
      if (!availableFilters.includes(filters[i]) && filters[i] !== '') {
        availableFilters.push(filters[i]);
      }
    }
    setSourceFilters(availableFilters);
  }, [data, changedData]);

  //Country Filter Context
  const [countryFilters, setCountryFilters] = useState([]);
  const [countryfiltersAdded, setCountryFiltersAdded] = useState([]);
  useEffect(() => {
    let allData = [...data, ...changedData];
    let filters = allData.map((d) => {
      return d.country;
    });
    let availableFilters = [];

    for (let i = 0; i < filters.length; i++) {
      if (!availableFilters.includes(filters[i]) && filters[i] !== '') {
        availableFilters.push(filters[i]);
      }
    }
    setCountryFilters(availableFilters);
  }, [data, changedData]);

  //Region Filter Context
  const [regionFilters, setRegionFilters] = useState([]);
  const [regionfiltersAdded, setRegionFiltersAdded] = useState([]);
  useEffect(() => {
    let allData = [...data, ...changedData];
    let filters = allData.map((d) => {
      return d.region;
    });
    let availableFilters = [];

    for (let i = 0; i < filters.length; i++) {
      if (!availableFilters.includes(filters[i]) && filters[i] !== '') {
        availableFilters.push(filters[i]);
      }
    }
    setRegionFilters(availableFilters);
  }, [data, changedData]);

  //Region Filter Context
  const [sectorFilters, setSectorFilters] = useState([]);
  const [sectorfiltersAdded, setSectorFiltersAdded] = useState([]);
  useEffect(() => {
    let allData = [...data, ...changedData];
    let filters = allData.map((d) => {
      return d.sector;
    });
    let availableFilters = [];

    for (let i = 0; i < filters.length; i++) {
      if (!availableFilters.includes(filters[i]) && filters[i] !== '') {
        availableFilters.push(filters[i]);
      }
    }
    setSectorFilters(availableFilters);
  }, [data, changedData]);

  //Default Context Data
  useEffect(() => {
    getData().then((data) => {
      let { docs } = data;
      setData(docs);
    });
  }, []);
  return (
    <defaultData.Provider
      value={{
        data,
        setData,
        flag,
        setFlag,
        countryNameState,
        countryCountState,
        keyRelevanceState,
        valueRelevanceState,
        pestleFilters,
        setPestleFilters,
        filtersAdded,
        setFiltersAdded,
        setChangedData,
        changedData,
        keyLikelihoodState,
        valueLikelihoodState,
        keyIntensityState,
        valueIntensityState,
        keyIntensityState,
        valueIntensityState,
        chartDataState,
        topicNameState,
        topicCountState,
        sourceFilters,
        setSourceFilters,
        sourcefiltersAdded,
        setSourceFiltersAdded,
        countryFilters,
        setCountryFilters,
        countryfiltersAdded,
        setCountryFiltersAdded,
        regionFilters,
        setRegionFilters,
        regionfiltersAdded,
        setRegionFiltersAdded,
        sectorFilters,
        setSectorFilters,
        sectorfiltersAdded,
        setSectorFiltersAdded,
      }}
    >
      {children}
    </defaultData.Provider>
  );
};

export default DefaultApp;
