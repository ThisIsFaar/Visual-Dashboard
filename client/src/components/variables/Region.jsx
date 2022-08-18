import { useContext } from 'react';
import { defaultData } from '../../context/defaultContext';

const Region = () => {
  const { data } = useContext(defaultData);
  if (data.length > 0) {
  }
  return <div>Region</div>;
};

export default Region;
