import { useState, useContext } from 'react';
import { defaultData } from '../../context/defaultContext';
import Chart from 'react-apexcharts';
import { useEffect } from 'react';
const Intensity = () => {
  const { keyIntensityState, valueIntensityState } = useContext(defaultData);

  return (
    <div className="p-8  bg-white m-2 rounded-2xl drop-shadow-2xl">
      {keyIntensityState !== undefined ? (
        <Chart
          options={{
            chart: {
              height: 350,
              type: 'line',
              zoom: {
                enabled: false,
              },
            },
            dataLabels: {
              enabled: false,
            },
            stroke: {
              curve: 'straight',
            },
            title: {
              text: 'Intensity Chart ',
              align: 'left',
            },
            grid: {
              row: {
                colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
                opacity: 0.5,
              },
            },
            xaxis: {
              categories: keyIntensityState,
            },
          }}
          series={[
            {
              name: 'Intensity Value',
              data: valueIntensityState,
            },
          ]}
          type="line"
          width={800}
          height={500}
        />
      ) : (
        'Loading...'
      )}
    </div>
  );
};

export default Intensity;
