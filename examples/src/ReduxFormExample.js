import ReactAmountField from '../../src/ReactAmountField';
import React from 'react'
import {Field, reduxForm} from 'redux-form';
import {connect} from 'react-redux';

class Wrapper extends React.Component {
  render() {
    console.log(this.props);
    const props = { ...this.props };
    return React.cloneElement(<ReactAmountField><input /></ReactAmountField>, { ...props }) ;
  }
}

class Form extends React.Component {
  
  static propTypes = {
    handleSubmit: React.PropTypes.func.isRequired
  }
  handleSubmit = (values) => {
    console.log(values);
  }

  render() {
    const {handleSubmit, resolvedValue, resolvedVisited, resolvedTouched, resolvedActive} = this.props;
    return (
      <div>
        <div style={{ width: '25%', float: 'left' }}>
          Visited : {resolvedVisited.toString()}
        </div>
        <div style={{ width: '25%', float: 'left' }}>
          Touched : {resolvedTouched.toString()}
        </div>
        <div style={{ width: '25%', float: 'left' }}>
          Value : {resolvedValue}
        </div>
        <div style={{ width: '25%', float: 'left' }}>
          Active : {resolvedActive.toString()}
        </div>
        <form style={{ width: '100%', float: 'left' }} onSubmit={handleSubmit}>
          <div>
              <Field name="field" component={Wrapper} type="text" placeholder="My Amount Field"/>
          </div>
        </form>
      </div>
    )
  }
}

function mapStateToProps(state) {
  let resolvedValue = null;
  let resolvedVisited = false;
  let resolvedTouched = false;
  let resolvedActive = false;
  if (state.form && state.form.simple && state.form.simple.values) {
    resolvedValue = state.form.simple && state.form.simple.values.field;
  }
  if (state.form && state.form.simple && state.form.simple.fields && state.form.simple.fields.field) {
    if (state.form.simple.fields.field.visited) {
      resolvedVisited = state.form.simple.fields.field.visited;
    }
    if (state.form.simple.fields.field.touched) {
      resolvedTouched = state.form.simple.fields.field.touched;
    }
    if (state.form.simple.fields.field.active) {
      resolvedActive = state.form.simple.fields.field.active;
    }
  }
  return {
    resolvedValue,
    handleSubmit: values => (console.log(values)),
    resolvedVisited,
    resolvedTouched,
    resolvedActive
  }
}

const DecoratedForm = connect(mapStateToProps)(Form);

export default reduxForm({
  form: 'simple'  // a unique identifier for this form
})(DecoratedForm)
