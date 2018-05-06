import React from 'react';
import { Bar } from 'react-chartjs-2';

const Chart = ({profile}) => {
  const trait1_percentile = profile.personality[0].percentile * 100;
  const trait2_percentile = profile.personality[1].percentile * 100;
  const trait3_percentile = profile.personality[2].percentile * 100;
  const trait4_percentile = profile.personality[3].percentile * 100;
  const trait5_percentile = profile.personality[4].percentile * 100;

  const trait1_name = profile.personality[0].name;
  const trait2_name = profile.personality[1].name;
  const trait3_name = profile.personality[2].name;
  const trait4_name = profile.personality[3].name;
  const trait5_name = profile.personality[4].name;

  const data = {
      labels: [trait1_name, trait2_name, trait3_name, trait4_name, trait5_name],
      datasets: [{
        label: 'foo',
          data: [trait1_percentile, trait2_percentile, trait3_percentile, trait4_percentile, trait5_percentile],
          backgroundColor: [
              'rgba(255, 99, 132, 0.2)',
              'rgba(54, 162, 235, 0.2)',
              'rgba(255, 206, 86, 0.2)',
              'rgba(75, 192, 192, 0.2)',
              'rgba(153, 102, 255, 0.2)'
          ],
          borderColor: [
              'rgba(255,99,132,1)',
              'rgba(54, 162, 235, 1)',
              'rgba(255, 206, 86, 1)',
              'rgba(75, 192, 192, 1)',
              'rgba(153, 102, 255, 1)'
          ],
          borderWidth: 1
      },{
        label: 'bar',
          data: [100 - trait1_percentile, 100 - trait2_percentile, 100 - trait3_percentile, 100 - trait4_percentile, 100 - trait5_percentile],
          backgroundColor: [
              'rgba(255,255,255,0)',
              'rgba(255,255,255,0)',
              'rgba(255,255,255,0)',
              'rgba(255,255,255,0)',
              'rgba(255,255,255,0)'
          ],
          borderColor: [
              'rgba(255,99,132,1)',
              'rgba(54, 162, 235, 1)',
              'rgba(255, 206, 86, 1)',
              'rgba(75, 192, 192, 1)',
              'rgba(153, 102, 255, 1)'
          ],
          borderWidth: 1
      }]
  };
  const options = {
    hover: {
      mode: null
    },
    scales: {
        xAxes: [{
            stacked: true
        }],
        yAxes: [{
            stacked: true,
            scaleLabel: {
              labelString: 'Percentile',
              display: true
            }
        }]
    },
    legend: {
      display: false
    },
    tooltips: {
      enabled: false,
      position: 'nearest',
      mode: 'index',
      intersect: false,
      callbacks: {
      // Use the footer callback to display the sum of the items showing in the tooltip
      label: function() {
        return 'Foobar';
      },
    },
    }
};

/*
  var bar = document.getElementById("barChart");
  var myChart = new Chart(bar, {
      type: 'bar',
      data: {
          labels: ["Openness", "Conscientiousness", "Extraversion", "Agreeableness", "Emotional range"],
          datasets: [{
              data: [60, 20, 30, 90, 80],
              backgroundColor: [
                  'rgba(255, 99, 132, 0.2)',
                  'rgba(54, 162, 235, 0.2)',
                  'rgba(255, 206, 86, 0.2)',
                  'rgba(75, 192, 192, 0.2)',
                  'rgba(153, 102, 255, 0.2)'
              ],
              borderColor: [
                  'rgba(255,99,132,1)',
                  'rgba(54, 162, 235, 1)',
                  'rgba(255, 206, 86, 1)',
                  'rgba(75, 192, 192, 1)',
                  'rgba(153, 102, 255, 1)'
              ],
              borderWidth: 1
          },{
              data: [40, 80, 70, 10, 20],
              backgroundColor: [
                  'rgba(255,255,255,0)',
                  'rgba(255,255,255,0)',
                  'rgba(255,255,255,0)',
                  'rgba(255,255,255,0)',
                  'rgba(255,255,255,0)'
              ],
              borderColor: [
                  'rgba(255,99,132,1)',
                  'rgba(54, 162, 235, 1)',
                  'rgba(255, 206, 86, 1)',
                  'rgba(75, 192, 192, 1)',
                  'rgba(153, 102, 255, 1)'
              ],
              borderWidth: 1
          }]
      },
      options: {
        hover: {
          mode: null
        },
        scales: {
            xAxes: [{
                stacked: true
            }],
            yAxes: [{
                stacked: true,
                scaleLabel: {
                  labelString: 'Percentile',
                  display: true
                }
            }]
        },
        legend: {
          display: false
        },
        tooltips: {
          enabled: false,
          position: 'nearest',
          mode: 'index',
          intersect: false,
          callbacks: {
          // Use the footer callback to display the sum of the items showing in the tooltip
          label: function() {
            return 'Foobar';
          },
        },
        }
    }
  });
  */


  return (
      <div className="row">
        <div className="col">
          <div className="chart-container" styles="position: relative; width:100%">
            <Bar data={data} options={options} />
          </div>
        </div>
      </div>
  );
};

export default Chart;
