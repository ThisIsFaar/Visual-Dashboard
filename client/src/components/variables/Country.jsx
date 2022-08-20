import { useContext, useState } from 'react';
import { defaultData } from '../../context/defaultContext';
import Chart from 'react-apexcharts';
import { useEffect } from 'react';

const Country = () => {
  const { data } = useContext(defaultData);
  if (data.length > 0) {
    var countryNames = [];

    for (let i = 0; i < data.length; i++) {
      if (!countryNames.includes(data[i].country) && data[i].country !== '') {
        countryNames.push(data[i].country);
      }
    }
    countryNames.sort();

    var countryCount = Array(countryNames.length).fill(0);

    for (let i = 0; i < data.length; i++) {
      if (data[i].country !== '') {
        countryCount[countryNames.indexOf(data[i].country)]++;
      }
    }
  }
  const [countryNameState, setCountryNameState] = useState([]);
  const [countryCountState, setCountryCountState] = useState([]);
  useEffect(() => {
    setCountryCountState(countryCount);
  }, countryCount);
  useEffect(() => {
    setCountryNameState(countryNames);
  }, countryNames);
  return (
    <div className="p-8 m-2 bg-white rounded-2xl drop-shadow-2xl">
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
    </div>
  );
};

export default Country;
