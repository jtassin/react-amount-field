import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import ReduxFormMaterialUiWrapper from '../ReduxFormMaterialUiWrapper';
import ReactAmountField from '../ReactAmountField';
import TextField from 'material-ui/TextField';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

/* eslint-disable no-undef */
describe('ReduxFormMaterialUiWrapper', () => {
  it('is a wrapper for a reduxForm compatible of the material-ui component', () => {
    const muiTheme = getMuiTheme(lightBaseTheme);
    const CustomProvider = ({ children }) => (
      <MuiThemeProvider muiTheme={muiTheme}>
        {children}
      </MuiThemeProvider>
    );
    CustomProvider.propTypes = {
      children: React.PropTypes.element.isRequired,
    };
    const wrapper = shallow(
      <CustomProvider>
        <ReduxFormMaterialUiWrapper input={{ name: 'fieldName', id: 'id' }} />
      </CustomProvider>
      , { context: { muiTheme } });

    const expectedWrapper = shallow(
      <CustomProvider>
        <ReactAmountField name="fieldName" id="id"><TextField /></ReactAmountField>
      </CustomProvider>
      , { context: { muiTheme } });
    expect(wrapper.html()).to.equal(expectedWrapper.html());
  });
});
