// This is the MetricsCounter component
// We use this within the Metrics container
import React, {Component} from 'react';

export class MetricsCounter extends Component {
  render() {
    const {title, figure} = this.props;

    return (
      <div className="ig-metrics__counter">
        <div>
          <h3>{title}</h3>
          <h2>{figure}</h2>
        </div>
      </div>
    );
  }
}

MetricsCounter.propTypes = {
  title: React.PropTypes.string.isRequired,
  figure: React.PropTypes.number.isRequired
};
