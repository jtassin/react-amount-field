import React, { PropTypes } from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import ReduxFormMaterialUiWrapper from '../../src/ReduxFormMaterialUiWrapper';


export const ExampleForm = function render(props) {
  const {
      handleSubmit,
      resolvedValue,
      resolvedVisited,
      resolvedTouched,
      resolvedActive,
    } = props;
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
            <Field
              name="field"
              id="redux-form-id"
              component={ReduxFormMaterialUiWrapper}
              type="text"
              placeholder="My Amount Field"
            />
          </div>
        </form>
      </div>
    </MuiThemeProvider>
  );
};

ExampleForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  resolvedValue: PropTypes.string,
  resolvedVisited: PropTypes.bool.isRequired,
  resolvedTouched: PropTypes.bool.isRequired,
  resolvedActive: PropTypes.bool.isRequired,
};

function mapStateToProps(state) {
  let resolvedValue = null;
  let resolvedVisited = false;
  let resolvedTouched = false;
  let resolvedActive = false;
  const form = state.form;
  if (form && form.reduxForm && form.reduxForm.values) {
    resolvedValue = form.reduxForm && form.reduxForm.values.field;
  }
  if (form && form.reduxForm && form.reduxForm.fields && form.reduxForm.fields.field) {
    if (form.reduxForm.fields.field.visited) {
      resolvedVisited = form.reduxForm.fields.field.visited;
    }
    if (form.reduxForm.fields.field.touched) {
      resolvedTouched = form.reduxForm.fields.field.touched;
    }
    if (form.reduxForm.fields.field.active) {
      resolvedActive = form.reduxForm.fields.field.active;
    }
  }
  return {
    resolvedValue,
    resolvedVisited,
    resolvedTouched,
    resolvedActive,
  };
}

const DecoratedForm = connect(mapStateToProps)(ExampleForm);

export default reduxForm({
  form: 'reduxForm',
})(DecoratedForm);
