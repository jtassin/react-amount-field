import React from 'react';
import ReactAmountField from './ReactAmountField';
import TextField from 'material-ui/TextField';

export default class extends React.PureComponent {
  static propTypes = {
    input: React.PropTypes.object.isRequired,
  }

  render() {
    const props = { ...this.props.input };
    return <ReactAmountField id={this.props.id} {...props}><TextField /></ReactAmountField>;
  }
}
