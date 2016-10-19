import ReduxFormMaterialUiWrapper from '../../src/ReduxFormMaterialUiWrapper';
import React, { createElement, PropTypes } from 'react'
import {Field, reduxForm} from 'redux-form';
import {connect} from 'react-redux';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';


class ExampleForm extends React.Component {
  
  render() {
    const {handleSubmit, resolvedValue, resolvedVisited, resolvedTouched, resolvedActive} = this.props;
    return (
      <MuiThemeProvider muiTheme={getMuiTheme(lightBaseTheme)}>
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
              <Field name="field" component={ReduxFormMaterialUiWrapper} type="text" placeholder="My Amount Field"/>
          </div>
        </form>
          </div>
      </MuiThemeProvider>
    )
  }
}

function mapStateToProps(state) {
  let resolvedValue = null;
  let resolvedVisited = false;
  let resolvedTouched = false;
  let resolvedActive = false;
  if (state.form && state.form.reduxForm && state.form.reduxForm.values) {
    resolvedValue = state.form.reduxForm && state.form.reduxForm.values.field;
  }
  if (state.form && state.form.reduxForm && state.form.reduxForm.fields && state.form.reduxForm.fields.field) {
    if (state.form.reduxForm.fields.field.visited) {
      resolvedVisited = state.form.reduxForm.fields.field.visited;
    }
    if (state.form.reduxForm.fields.field.touched) {
      resolvedTouched = state.form.reduxForm.fields.field.touched;
    }
    if (state.form.reduxForm.fields.field.active) {
      resolvedActive = state.form.reduxForm.fields.field.active;
    }
  }
  return {
    resolvedValue,
    resolvedVisited,
    resolvedTouched,
    resolvedActive
  }
}

const DecoratedForm = connect(mapStateToProps)(ExampleForm);

export default reduxForm({
  form: 'reduxForm' 
})(DecoratedForm)
