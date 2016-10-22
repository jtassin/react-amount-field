import React from 'react';
import ReactAmountField from '../../src/ReactAmountField';
import TextField from 'material-ui/TextField';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

export default class extends React.Component {

  constructor() {
    super();
    this.state = {
      val: '1337',
    };
  }

  render() {
    return (
      <MuiThemeProvider muiTheme={getMuiTheme(lightBaseTheme)}>
        <div style={{ height: '50px' }}>
          <div style={{ width: '50%', float: 'left' }}>
            {this.state.val}
          </div>
          <div style={{ width: '50%', float: 'left' }}>
            <ReactAmountField onChange={(event) => { this.setState({ val: event.target.value }); }}
              value={this.state.val}
            ><TextField
              hintText="I will be turned to an amount"
            /></ReactAmountField>
          </div>
        </div>
      </MuiThemeProvider>
    );
  }
}
