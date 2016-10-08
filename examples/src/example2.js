import React from 'react';
import Playground  from 'component-playground';
import MyComponent from '../../src/MyComponent';

export default React.createClass({
	render () {
		return (
			<div style={{backgroundColor: 'white'}}>
				<Playground codeText={"<MyComponent>Example 2</MyComponent>"} scope={{React: React, MyComponent: MyComponent}}/>
			</div>
		);
	}
});
