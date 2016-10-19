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
    value: PropTypes.text,
  };
  
  proxyEvent(target) {
    return (event) => {
      if (target) {
        let newValue = null;
        if (event.target.value && event.target.value != '') {
          this.setState({unflushedValue: event.target.value.toString()});
          if (!event.target.value.toString().endsWith('.')) {
            const oldValue = event.target.value.toString().replace(/[^\d.,]/g, '').replace(',', '.');
            newValue = parseInt(oldValue * 100, 10);
            event.target.value = newValue.toString();
            target(event);
          }
        } else {
          this.setState({unflushedValue: null});
          target(event);
        }
      }
    };
  }

  render() {
    const props = { ...this.props };
    props.value = this.state.unflushedValue;
    props.onChange = this.proxyEvent.bind(this)(this.props.onChange);
    props.onBlur = this.proxyEvent.bind(this)(this.props.onBlur);
    props.onDrop = this.proxyEvent.bind(this)(this.props.onDrop);
    delete props.children;
    return <div>{React.cloneElement(this.props.children, { ...props })}</div>;
  }
}

export default ReactAmountField;
