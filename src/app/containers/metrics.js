// This is the metrics container
// All the data for average counts etc will appear here
import React, {Component} from 'react';
import Firebase from 'firebase';
import axios from 'axios';

import {Line} from 'react-chartjs-2';
import {MetricsCounter} from '../components/metrics-counter';

export class Metrics extends Component {
  constructor(props) {
    super(props);
    this.state = {
      metrics: [],
      results: [],
      chartConfig: {}
    };
  }

  getMetrics() {
    axios.get('http://localhost:8080/averages')
      .then(res => {
        const tmp = [];
        const metrics = res.data.data.metrics;

        // Push to temp array
        metrics.map(metric => {
          return tmp.push(metric);
        });

        this.setState({
          metrics: tmp
        });
      });
  }

  plotData(snapshot) {
    const results = snapshot.val();
    const tmp = [];
    // Iterate through results, push to temp array and upate state.
    for (const key in results) {
      if (Object.prototype.hasOwnProperty.call(results, key)) {
        const item = results[key];
        item.id = key;
        tmp.push(item);
      }
    }

    const myData = [];

    tmp.map(result => myData.push({
      dateTime: result.timestamp,
      blood: result.blood
    }));

    const chartConfig = {
      labels: myData.map(result => result.dateTime),
      datasets: [
        {
          label: 'Blood Sugars',
          fill: true,
          lineTension: 0.1,
          backgroundColor: 'rgba(243,84,88,0.4)',
          borderColor: 'rgba(243,84,88,1)',
          borderCapStyle: 'butt',
          borderDash: [],
          borderDashOffset: 0.0,
          borderJoinStyle: 'miter',
          pointBorderColor: 'rgba(194,67,70,0.85)',
          pointBackgroundColor: '#fff',
          pointBorderWidth: 5,
          pointHoverRadius: 5,
          pointHoverBackgroundColor: 'rgba(243,84,88,1)',
          pointHoverBorderColor: 'rgba(220,220,220,1)',
          pointHoverBorderWidth: 2,
          pointRadius: 1,
          pointHitRadius: 10,
          data: myData.map(result => result.blood),
          spanGaps: true
        }
      ]
    };

    this.setState({
      results: myData,
      chartConfig
    });
  }

  componentDidMount() {
    // Sniff out Firebase Updated
    const firebaseRef = Firebase.database().ref('bloods/');

    firebaseRef.on('value', (snapshot => {
      this.getMetrics();
      this.plotData(snapshot);
    }));
  }

  render() {
    const {metrics, chartConfig} = this.state;

    return (
      <section>
        <div className="ig-metrics">
          <div className="ig-container ig-container--fluid">
            <div className="ig-grid ig-grid-no-spacing">
              {
                metrics.length > 0 ? (
                  metrics.map((metric, index) => {
                    return (
                      <div className="ig-grid-cell-column-3" key={`${metric.type}-${index}`}>
                        <MetricsCounter title={metric.title} figure={metric.figure}/>
                      </div>
                    );
                  })
                ) : (
                  <div>
                    <h2>Loading Data...</h2>
                  </div>
                )
              }
            </div>
          </div>
        </div>

        <div className="ig-metrics">
          <div className="ig-container ig-container--fluid">
            <div className="ig-grid ig-grid-no-spacing">
              <div className="ig-chart">
                <Line data={chartConfig} width={'100%'} options={{maintainAspectRatio: false}}/>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
