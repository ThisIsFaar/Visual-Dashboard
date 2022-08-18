import { useContext } from 'react';
import { defaultData } from '../../context/defaultContext';

const City = () => {
  const { data } = useContext(defaultData);
  if (data.length > 0) {
  }
  return <div>City</div>;
};

export default City;
