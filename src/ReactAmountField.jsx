import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

class ReactAmountField extends PureComponent {

  constructor(props) {
    super(props);
    this.state = {
      unflushedValue: '',
    };
    if (this.props.value === 0) {
      this.state.unflushedValue = 0;
    } else if (this.props.value && this.props.value !== '') {
      this.state.unflushedValue = this.props.value / 100;
    }
  }

  proxyEvent(target) {
    return (event) => {
      if (target) {
        const eventValue = event.target.value;
        if (eventValue && eventValue !== '') {
          this.setState({ unflushedValue: eventValue.toString() });
          if (!eventValue.toString().endsWith('.')) {
            const oldValue = eventValue.toString().replace(/[^\d.,]/g, '').replace(',', '.');
            const newEvent = event;
            newEvent.target.value = parseInt(oldValue * 100, 10).toString();
            target(newEvent);
          }
        } else {
          this.setState({ unflushedValue: '' });
          target(event);
        }
      }
    };
  }

  render() {
    const props = { ...this.props };
    props.value = this.state.unflushedValue;
    props.onChange = this.proxyEvent(this.props.onChange);
    props.onBlur = this.proxyEvent(this.props.onBlur);
    props.onDrop = this.proxyEvent(this.props.onDrop);
    delete props.children;
    return <div>{React.cloneElement(this.props.children, { ...props })}</div>;
  }
}

ReactAmountField.propTypes = {
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
  children: PropTypes.node,
  onBlur: PropTypes.func,
  onChange: PropTypes.func,
  onDrop: PropTypes.func,
};

export default ReactAmountField;
