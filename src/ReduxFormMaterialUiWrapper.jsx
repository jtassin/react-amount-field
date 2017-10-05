import React from 'react';
import PropTypes from 'prop-types';
/* eslint-disable import/no-extraneous-dependencies*/
import TextField from 'material-ui/TextField';
import ReactAmountField from './ReactAmountField';

const render = (props) => {
  const inputProps = { ...props.input };
  return <ReactAmountField id={props.id} {...inputProps}><TextField /></ReactAmountField>;
};

render.propTypes = {
  id: PropTypes.string,
  // eslint-disable-next-line react/forbid-prop-types
  input: PropTypes.object.isRequired,
};

export default render;
