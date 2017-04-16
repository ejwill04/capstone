import React, { Component } from 'react';
import { Tabs, Tab } from 'material-ui/Tabs';

const styles = {
  headline: {
    color: '#B3B7B7',
    fontSize: 24,
    paddingTop: 16,
    marginBottom: 12,
    fontWeight: 400,
  },
};

const Footer = () => {
    return (
    <div id='footer'>
      <Tabs>
        <Tab label='Search'>
          <div className='tab'>
            <h2 className="copy-text" style={styles.headline}>Search for companies that have hired Turing graduates.</h2>
          </div>
        </Tab>
        <Tab label='Review'>
          <div className='tab'>
            <h2 className="copy-text" style={styles.headline}>Find company reviews from Turing alumni, or leave your own review.</h2>
          </div>
        </Tab>
        <Tab label='Interview' >
          <div className='tab'>
            <h2 className="copy-text" style={styles.headline}>Get information on the hiring process at companies that have employed Turing grads.</h2>
          </div>
        </Tab>
      </Tabs>
    </div>
    );
  }

  export default Footer
