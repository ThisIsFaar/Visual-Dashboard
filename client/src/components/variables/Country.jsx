import { useContext } from 'react';
import { defaultData } from '../../context/defaultContext';

const Country = () => {
  const { data } = useContext(defaultData);
  if (data.length > 0) {
  }
  return <div>Country</div>;
};

export default Country;
