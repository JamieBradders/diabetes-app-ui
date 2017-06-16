import React, {Component} from 'react';

// Global UI Components
import Header from './header';
import {Footer} from './footer';

// Start building up the containers
import {Metrics} from './containers/metrics';

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100%'
  },
  main: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column'
  }
};

export class Main extends Component {
  render() {
    return (
      <div style={styles.container}>
        <Header/>
        <main style={styles.main}>
          <Metrics/>
        </main>
        <Footer/>
      </div>
    );
  }
}
