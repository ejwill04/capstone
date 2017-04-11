import React, { Component } from 'react';
import {Tabs, Tab} from 'material-ui/Tabs';

const styles = {
  headline: {
    color: '#B3B7B7',
    fontSize: 24,
    paddingTop: 16,
    marginBottom: 12,
    fontWeight: 400,
  },
};

export default class Footer extends Component {

  constructor(props) {
    super(props);
    this.state = {
      value: 'a'
    };
  }

  handleChange(value){
    this.setState({
      value: value
    });
    console.log('Value: ',this.state.value);
  };

  render() {
    return (
    <div id="footer">
      <Tabs
        value={this.state.value}
        onChange={() => this.handleChange()}
      >
        <Tab label="Search" value="search">
          <div className="tab">
            <h2 style={styles.headline}>Search for Companies</h2>
            <p className="tab-text">
              Search for companies that have hired Turing grads.
            </p>
          </div>
        </Tab>
        <Tab label="Review" value="review">
          <div className="tab">
            <h2 style={styles.headline}>Company Reviews</h2>
            <p className="tab-text">
              Find company reviews from employees.
            </p>
          </div>
        </Tab>
        <Tab label="Interview" value="interview">
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
}
