import { useContext, useState, useEffect } from 'react';
import { defaultData } from '../../context/defaultContext';
import Chart from 'react-apexcharts';

const Likelihood = () => {
  const { keyLikelihoodState, valueLikelihoodState } = useContext(defaultData);

  return (
    <div className="p-8 m-2 bg-white rounded-2xl drop-shadow-2xl">
      {keyLikelihoodState != undefined ? (
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
      ) : (
        'Loading...'
      )}
    </div>
  );
};

export default Likelihood;
