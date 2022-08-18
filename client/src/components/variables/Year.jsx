import { useContext } from 'react';
import { defaultData } from '../../context/defaultContext';

const Year = () => {
  const { data } = useContext(defaultData);
  if (data.length > 0) {
  }
  return <div>Year</div>;
};

export default Year;
