import React from 'react';
/* eslint-disable import/no-extraneous-dependencies*/
import TextField from 'material-ui/TextField';
import ReactAmountField from './ReactAmountField';

const render = props => <ReactAmountField id={props.id} {...props}><TextField /></ReactAmountField>;

render.propTypes = {
  id: React.PropTypes.string,
};

export default render;
