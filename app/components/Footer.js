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
    <div id="footer">
      <Tabs>
        <Tab label="Search">
          <div className="tab">
            <h2 style={styles.headline}>Search for Companies</h2>
            <p className="tab-text">
              Search for companies that have hired Turing grads.
            </p>
          </div>
        </Tab>
        <Tab label="Review">
          <div className="tab">
            <h2 style={styles.headline}>Company Reviews</h2>
            <p className="tab-text">
              Find company reviews from employees.
            </p>
          </div>
        </Tab>
        <Tab label="Interview" >
          <div className="tab">
            <h2 style={styles.headline}>Hiring Process Info</h2>
            <p className="tab-text">
              Get information on the hiring process.
            </p>
          </div>
        </Tab>
      </Tabs>
    </div>
    );
  }

  export default Footer
