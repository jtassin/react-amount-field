import React, { PropTypes, PureComponent } from 'react';

class MyComponent extends PureComponent {

  static propTypes = {
  };

  render() {
    return <div>{this.props.children}</div>
  }
}

export default MyComponent;
