import { useContext, useState } from 'react';
import { defaultData } from '../../context/defaultContext';
import Chart from 'react-apexcharts';
import { useEffect } from 'react';

const Topics = () => {
  const { data } = useContext(defaultData);
  if (data.length > 0) {
    var topicNames = [];

    for (let i = 0; i < data.length; i++) {
      if (!topicNames.includes(data[i].topic) && data[i].topic !== '') {
        topicNames.push(data[i].topic.toLowerCase());
      }
    }
    topicNames.sort();
    var topicCount = Array(topicNames.length).fill(0);

    for (let i = 0; i < data.length; i++) {
      if (data[i].topic !== '') {
        topicCount[topicNames.indexOf(data[i].topic)]++;
      }
    }
  }
  const [topicNameState, setTopicNameState] = useState([]);
  const [topicCountState, setTopicCountState] = useState([]);
  useEffect(() => {
    setTopicCountState(topicCount);
  }, topicCount);
  useEffect(() => {
    setTopicNameState(topicNames);
  }, topicNames);
  return (
    <div className="p-8 m-2 bg-white rounded-2xl drop-shadow-2xl">
      <Chart
        series={[
          {
            name: 'Topics',
            data: topicCountState,
          },
        ]}
        options={{
          annotations: {
            points: [
              {
                x: 'Bananas',
                seriesIndex: 0,
                label: {
                  borderColor: '#775DD0',
                  offsetY: 0,
                  style: {
                    color: '#fff',
                    background: '#775DD0',
                  },
                  text: 'Bananas are good',
                },
              },
            ],
          },
          chart: {
            height: 350,
            type: 'bar',
          },
          plotOptions: {
            bar: {
              borderRadius: 10,
              columnWidth: '50%',
            },
          },
          dataLabels: {
            enabled: false,
          },
          stroke: {
            width: 2,
          },

          grid: {
            row: {
              colors: ['#fff', '#f2f2f2'],
            },
          },
          xaxis: {
            labels: {
              rotate: -45,
            },
            categories: topicNameState,
            tickPlacement: 'on',
          },
          yaxis: {
            title: {
              text: 'Count',
            },
          },
          title: {
            text: 'Topics Count Chart',
          },
          fill: {
            type: 'gradient',
            gradient: {
              shade: 'light',
              type: 'horizontal',
              shadeIntensity: 0.25,
              gradientToColors: undefined,
              inverseColors: true,
              opacityFrom: 0.85,
              opacityTo: 0.85,
              stops: [50, 0, 100],
            },
          },
        }}
        type="bar"
        width={1280}
        height={720}
      />
    </div>
  );
};

export default Topics;
