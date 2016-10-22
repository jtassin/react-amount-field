import React from 'react';
import ReactAmountField from '../../src/ReactAmountField';

export default class extends React.Component {

  constructor() {
    super();
    this.state = {
      val: '1337',
    };
  }

  render() {
    return (
      <div style={{ height: '50px' }}>
        <div style={{ width: '50%', float: 'left' }}>
          {this.state.val}
        </div>
        <div style={{ width: '50%', float: 'left' }}>
          <ReactAmountField onChange={(event) => { this.setState({ val: event.target.value }); }}
            value={this.state.val}
          ><input type="text" /></ReactAmountField>
        </div>
      </div>
    );
  }
}
