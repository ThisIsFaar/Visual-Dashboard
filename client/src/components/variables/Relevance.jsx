import { useContext, useState, useEffect } from 'react';
import { defaultData } from '../../context/defaultContext';
import Chart from 'react-apexcharts';

const Relevance = () => {
  const { data, setData } = useContext(defaultData);

  if (data.length > 0) {
    const Relevance = data.map((d) => {
      return d.relevance;
    });

    const maxValue = Math.max(...Relevance);

    let HashRelevance = new Array(maxValue + 1).fill(0);
    for (let i = 0; i < Relevance.length; i++) {
      if (Relevance[i] !== null) {
        HashRelevance[Relevance[i]]++;
      }
    }

    var keyRelevance = [];
    var valueRelevance = [];
    for (let i = 0; i < HashRelevance.length; i++) {
      if (HashRelevance[i] !== 0) {
        keyRelevance.push(i);
        valueRelevance.push(HashRelevance[i]);
      }
    }
  }
  const [keyRelevanceState, setKeyIntenstityState] = useState([]);
  const [valueRelevanceState, setValueIntenstityState] = useState([]);
  useEffect(() => {
    setKeyIntenstityState(keyRelevance);
  }, keyRelevance);

  useEffect(() => {
    setValueIntenstityState(valueRelevance);
  }, valueRelevance);
  if (valueRelevanceState !== undefined && valueRelevanceState.length > 0) {
    return (
      <div className="p-8  bg-white m-2 rounded-2xl drop-shadow-2xl">
        <Chart
          options={{
            chart: {
              width: 380,
              type: 'polarArea',
            },
            title: {
              text: 'Relevance Chart ',
              align: 'left',
            },
            labels: keyRelevanceState,
            fill: {
              opacity: 1,
            },
            stroke: {
              width: 1,
              colors: undefined,
            },
            yaxis: {
              show: false,
            },
            legend: {
              position: 'bottom',
            },
            plotOptions: {
              polarArea: {
                rings: {
                  strokeWidth: 0,
                },
                spokes: {
                  strokeWidth: 0,
                },
              },
            },
            theme: {
              monochrome: {
                enabled: true,
                shadeTo: 'light',
                shadeIntensity: 0.6,
              },
            },
          }}
          series={valueRelevanceState}
          type="polarArea"
          width={500}
        />
      </div>
    );
  } else {
    <div>loading....</div>;
  }
};

export default Relevance;
