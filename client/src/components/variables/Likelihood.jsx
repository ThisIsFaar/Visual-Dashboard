import { useContext } from 'react';
import { defaultData } from '../../context/defaultContext';

const Likelihood = () => {
  const { data, setData } = useContext(defaultData);

  if (data.length > 0) {
  }
  const updateData = () => {
    let temp = data.filter((d) => {
      if (d.topic === 'gas') {
        return d;
      }
    });
    console.log(temp);
    setData(temp);
  };
  return (
    <div>
      Likelihood
      <button onClick={updateData} className="button">
        Update
      </button>
    </div>
  );
};

export default Likelihood;
