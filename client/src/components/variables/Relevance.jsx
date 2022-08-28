import { useContext, useState, useEffect } from 'react';
import { defaultData } from '../../context/defaultContext';
import Chart from 'react-apexcharts';

const Relevance = () => {
  const { keyRelevanceState, valueRelevanceState } = useContext(defaultData);

  return (
    <div className="p-8  bg-white m-2 rounded-2xl drop-shadow-2xl">
      {keyRelevanceState !== undefined ? (
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
      ) : (
        'loading...'
      )}
    </div>
  );
};

export default Relevance;
