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
        <Tab label='What is Neumann?'>
          <div className='tab'>
            <h2 className="copy-text-headline" style={styles.headline}>Neumann allows Turing students and alumni to: </h2>
            <ul>
              <li className="copy-subtext">
                Search for companies that have hired Turing graduates.
              </li>
              <li
                className="copy-subtext">
                Find company reviews from Turing alumni, or leave your own review.
              </li>
              <li className="copy-subtext">
                Get information on the hiring process at companies that have employed Turing grads.
              </li>
            </ul>
          </div>
        </Tab>
        <Tab label='Who is Neumann?'>
          <div className='tab'>
            <h2 className="copy-text" style={styles.headline}></h2>
          </div>
        </Tab>
        <Tab label='Who are we?' >
          <div className='tab'>
            <h2 className="copy-text" style={styles.headline}></h2>
          </div>
        </Tab>
      </Tabs>
    </div>
    );
  }

  export default Footer
