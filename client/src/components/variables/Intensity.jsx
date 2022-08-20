import { useState, useContext } from 'react';
import { defaultData } from '../../context/defaultContext';
import Chart from 'react-apexcharts';
import { useEffect } from 'react';
const Intensity = () => {
  const { data } = useContext(defaultData);
  if (data.length > 0) {
    const Intensity = data.map((d) => {
      return d.intensity;
    });

    const maxValue = Math.max(...Intensity);

    let HashIntensity = new Array(maxValue + 1).fill(0);
    for (let i = 0; i < Intensity.length; i++) {
      if (Intensity[i] !== null) {
        HashIntensity[Intensity[i]]++;
      }
    }
    var keyIntensity = [];
    var valueIntensity = [];
    for (let i = 0; i < HashIntensity.length; i++) {
      if (HashIntensity[i] !== 0) {
        keyIntensity.push(i);
        valueIntensity.push(HashIntensity[i]);
      }
    }
  }
  const [keyIntensityState, setKeyIntenstityState] = useState([]);
  const [valueIntensityState, setValueIntenstityState] = useState([]);
  useEffect(() => {
    setKeyIntenstityState(keyIntensity);
  }, keyIntensity);

  useEffect(() => {
    setValueIntenstityState(valueIntensity);
  }, valueIntensity);

  return keyIntensityState !== undefined ? (
    <div className="p-8  bg-white m-2 rounded-2xl drop-shadow-2xl">
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
    </div>
  ) : (
    ''
  );
};

export default Intensity;
