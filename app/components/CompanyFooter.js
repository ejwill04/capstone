import React, { Component } from 'react';
import {Tabs, Tab} from 'material-ui/Tabs';

const styles = {

}

export default class Footer extends Component {

  constructor(props) {
    super(props);
    this.state = {
    }
  }

  render() {
    return (
    <div id="company-footer">
      <Tabs>
        <Tab label="Description" value="Description">
        </Tab>
        <Tab label="Reviews" value="Reviews">
        </Tab>
        <Tab label="Hiring Process" value="Hiring Process">
        </Tab>
      </Tabs>
    </div>
    )
  }
}
