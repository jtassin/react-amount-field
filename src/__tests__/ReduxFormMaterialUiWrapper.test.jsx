import React from 'react';
import sinon from 'sinon';
import PropTypes from 'prop-types';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import TextField from 'material-ui/TextField';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import ReactAmountField from '../ReactAmountField';
import ReduxFormMaterialUiWrapper from '../ReduxFormMaterialUiWrapper';

configure({ adapter: new Adapter() });

/* eslint-disable no-undef */
describe('ReduxFormMaterialUiWrapper', () => {
  // following lines serve to detect bad proptype or any react warning

  /* eslint-disable no-undef, no-console */
  beforeEach(() => {
    const stub = sinon.stub(console, 'error');
    stub.callsFake((warning) => { throw new Error(warning); });
  });
  /* eslint-disable no-undef */
  afterEach(() => { console.error.restore(); });

  it('is a wrapper for a reduxForm compatible of the material-ui component', () => {
    const muiTheme = getMuiTheme(
      Object.assign({ userAgent: 'fakeUserAgent' }, lightBaseTheme),
    );
    const CustomProvider = ({ children }) => (
      <MuiThemeProvider muiTheme={muiTheme}>
        {children}
      </MuiThemeProvider>
    );
    CustomProvider.propTypes = {
      children: PropTypes.element.isRequired,
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
