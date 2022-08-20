import { useContext, useState, useEffect } from 'react';
import { defaultData } from '../../context/defaultContext';
import Chart from 'react-apexcharts';

const Likelihood = () => {
  const { data, setData } = useContext(defaultData);

  if (data.length > 0) {
    const Likelihood = data.map((d) => {
      return d.likelihood;
    });

    const maxValue = Math.max(...Likelihood);

    let HashLikelihood = new Array(maxValue + 1).fill(0);
    for (let i = 0; i < Likelihood.length; i++) {
      if (Likelihood[i] !== null) {
        HashLikelihood[Likelihood[i]]++;
      }
    }
    var keyLikelihood = [];
    var valueLikelihood = [];
    for (let i = 0; i < HashLikelihood.length; i++) {
      if (HashLikelihood[i] !== 0) {
        keyLikelihood.push(i);
        valueLikelihood.push(HashLikelihood[i]);
      }
    }
  }
  const [keyLikelihoodState, setKeyIntenstityState] = useState([]);
  const [valueLikelihoodState, setValueIntenstityState] = useState([]);
  useEffect(() => {
    setKeyIntenstityState(keyLikelihood);
  }, keyLikelihood);

  useEffect(() => {
    setValueIntenstityState(valueLikelihood);
  }, valueLikelihood);

  return (
    <div className="p-8 m-2 bg-white rounded-2xl drop-shadow-2xl">
      <Chart
        options={{
          chart: {
            type: 'radar',
          },
          title: {
            text: 'Likelihood Radar Chart',
          },
          xaxis: {
            categories: keyLikelihoodState,
          },
        }}
        series={[
          {
            name: 'Series 1',
            data: valueLikelihoodState,
          },
        ]}
        type="radar"
        width={500}
      />
    </div>
  );
};

export default Likelihood;
