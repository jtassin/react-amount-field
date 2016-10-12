import React from 'react';
import Playground  from 'component-playground';
import ReactAmountField from '../../src/ReactAmountField';

export default React.createClass({
	render () {
		return (
			<div style={{backgroundColor: 'white'}}>
				<Playground codeText={"<ReactAmountField>Example3</ReactAmountField>"} scope={{React: React, ReactAmountField: ReactAmountField}}/>
			</div>
		);
	}
});
