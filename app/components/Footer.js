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
            <ul className="subtext-list">
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
            <p className="copy-text Neumann" >John von Neumann was a Hungarian-American mathematician who worked with Alan Turing to build the first stored-program computer.
            Neumann used Turing's idea of a single machine that can be used to compute any computable sequence.
            He is considered to be one of the true fathers of computing.</p>
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
