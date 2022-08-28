import { useContext, useState } from 'react';
import { defaultData } from '../../context/defaultContext';
import Chart from 'react-apexcharts';
import { useEffect } from 'react';

const Region = () => {
  const { chartDataState } = useContext(defaultData);

  return (
    <div className="p-8 m-2 bg-white rounded-2xl drop-shadow-2xl">
      {chartDataState !== undefined ? (
        <Chart
          series={[
            {
              data: chartDataState,
            },
          ]}
          options={{
            legend: {
              show: false,
            },
            chart: {
              height: 350,
              type: 'treemap',
            },
            title: {
              text: 'Region Distibuted Treemap',
              align: 'center',
            },
            colors: [
              '#3B93A5',
              '#F7B844',
              '#ADD8C7',
              '#EC3C65',
              '#CDD7B6',
              '#C1F666',
              '#D43F97',
              '#1E5D8C',
              '#421243',
              '#7F94B0',
              '#EF6537',
              '#C0ADDB',
            ],
            plotOptions: {
              treemap: {
                distributed: true,
                enableShades: false,
              },
            },
          }}
          type="treemap"
          width={1000}
          height={700}
        />
      ) : (
        'loading...'
      )}
    </div>
  );
};

export default Region;
