import { useContext } from 'react';
import { defaultData } from '../../context/defaultContext';

const Relevance = () => {
  const { data } = useContext(defaultData);
  if (data.length > 0) {
  }
  return <div>Relevance</div>;
};

export default Relevance;
