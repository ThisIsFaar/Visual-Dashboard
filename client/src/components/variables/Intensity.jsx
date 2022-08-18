import { useState, useContext } from 'react';
import { defaultData } from '../../context/defaultContext';
import Chart from 'react-apexcharts';
import { useEffect } from 'react';
const Intensity = () => {
  const { data } = useContext(defaultData);
  // const [option, setOption] = useState({});
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
  console.log(keyIntensityState);
  console.log(valueIntensityState);

  return keyIntensityState !== undefined ? (
    <div className="w-1/2 h-1/2">
      <Chart
        options={{
          chart: {
            id: 'apexchart-example',
          },
          xaxis: {
            categories: keyIntensityState,
          },
        }}
        series={[
          {
            name: 'Intensity',
            data: valueIntensityState,
          },
        ]}
        type="bar"
        // width={400}
        // height={500}
      />
    </div>
  ) : (
    ''
  );
};

export default Intensity;
