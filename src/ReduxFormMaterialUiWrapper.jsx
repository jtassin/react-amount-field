import React from 'react';
import PropTypes from 'prop-types';
/* eslint-disable import/no-extraneous-dependencies*/
import TextField from 'material-ui/TextField';
import ReactAmountField from './ReactAmountField';

const render = (props) => {
  const inputProps = { ...props.input };
  console.log(inputProps);
  return <ReactAmountField id={props.id} {...inputProps}><TextField /></ReactAmountField>;
};

render.propTypes = {
  id: PropTypes.string,
  input: PropTypes.object.isRequired,
};

export default render;
