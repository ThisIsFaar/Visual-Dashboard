import { useState, useEffect, createContext } from 'react';
import { getData } from '../util/apiHelper';

export const defaultData = createContext();

const DefaultApp = ({ children }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    getData().then((data) => {
      setData(data.docs);
    });
  }, []);
  return (
    <defaultData.Provider value={{ data, setData }}>
      {children}
    </defaultData.Provider>
  );
};

export default DefaultApp;
