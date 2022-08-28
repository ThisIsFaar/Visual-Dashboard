import { useContext, useState } from 'react';
import { defaultData } from '../../context/defaultContext';
import Chart from 'react-apexcharts';
import { useEffect } from 'react';

const Country = () => {
  const { countryNameState, countryCountState } = useContext(defaultData);

  return (
    <div className="p-8 m-2 bg-white rounded-2xl drop-shadow-2xl">
      {countryCountState !== undefined ? (
        <Chart
          series={[
            {
              data: countryCountState,
            },
          ]}
          options={{
            chart: {
              type: 'bar',
              height: 350,
            },
            plotOptions: {
              bar: {
                borderRadius: 4,
                horizontal: true,
              },
            },
            title: {
              text: 'Countries Chart',
              align: 'left',
              margin: 10,
              offsetX: 0,
              offsetY: 0,
              floating: false,
              style: {
                fontSize: '14px',
                fontWeight: 'bold',
                color: '#263238',
              },
            },
            dataLabels: {
              enabled: false,
            },
            xaxis: {
              categories: countryNameState,
            },
          }}
          type="bar"
          width={800}
          height={1000}
        />
      ) : (
        'Loading'
      )}
    </div>
  );
};

export default Country;
