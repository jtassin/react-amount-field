import React, { PropTypes, PureComponent } from 'react';

class ReactAmountField extends PureComponent {

  constructor(props) {
    super(props);
    this.state = {
      unflushedValue: null,
    };
    if (this.props.value) {
      this.state.unflushedValue = this.props.value / 100;
    }
  }
  
  static propTypes = {
    value: PropTypes.number,
  };
  
  change(event) {
    if (this.props.onChange) {
      let newValue = null;
      if (event.target.value) {
        this.setState({unflushedValue: event.target.value.toString()});
        if (!event.target.value.toString().endsWith('.')) {
          const oldValue = event.target.value.toString().replace(/[^\d.,]/g, '').replace(',', '.');
          newValue = parseInt(oldValue * 100, 10);
          const newEvent = {
            target: {
              value: newValue,
            },
          };
          this.props.onChange(newEvent);
        }
      } else {
        const newEvent = {
          target: {
            value: null,
          },
        };
        this.props.onChange(newEvent);
      }
    }
  }

  render() {
    let value = null;
    if (this.props.value) {
      value = parseInt(this.props.value, 10);
    }
    let formattedAmount = null;
    if (value) {
      formattedAmount = value / 100;
    }
    const props = { ...this.props };
    props.value = this.state.unflushedValue;
    props.onChange = this.change.bind(this);
    delete props.children;
    return <div>{React.cloneElement(this.props.children, { ...props })}</div>;
  }
}

export default ReactAmountField;
