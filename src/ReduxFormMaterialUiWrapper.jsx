import React from 'react';
/* eslint-disable import/no-extraneous-dependencies*/
import TextField from 'material-ui/TextField';
import ReactAmountField from './ReactAmountField';

const render = (props) => {
  const inputProps = { ...props.input };
  return <ReactAmountField id={props.id} {...inputProps}><TextField /></ReactAmountField>;
}

render.propTypes = {
  id: React.PropTypes.string,
  input: React.PropTypes.object.isRequired,
};

export default render;
