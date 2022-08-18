import { useContext } from 'react';
import { defaultData } from '../../context/defaultContext';

const Topics = () => {
  const { data } = useContext(defaultData);
  if (data.length > 0) {
  }
  return <div>Topics</div>;
};

export default Topics;
