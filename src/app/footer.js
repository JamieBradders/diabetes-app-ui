import React, {Component} from 'react';

const styles = {
  footer: {
    padding: '0.5rem',
    fontSize: '1rem',
    backgroundColor: '#1f1f1f',
    textAlign: 'center',
    color: 'white'
  }
};

export class Footer extends Component {
  render() {
    return (
      <footer style={styles.footer}>
        Built with ♥ by &nbsp;
        <a href="https://github.com/orgs/FountainJS/people">
          Endeavour Digital
        </a>
      </footer>
    );
  }
}
