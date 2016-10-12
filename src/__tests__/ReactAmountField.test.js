import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import ReactAmountField from '../ReactAmountField';

/* eslint-disable no-undef */
describe('ReactAmountField', () => {
  it('transmit all properties to children', () => {
    const wrapper = shallow(
      <ReactAmountField className="bar"><span></span></ReactAmountField>
    );
    expect(wrapper.html()).to.equal('<div><span class="bar"></span></div>');
  });

  it('divide the value by 100 and transmit it to the child', () => {
    const wrapper = shallow(
      <ReactAmountField value="215"><input type="number" /></ReactAmountField>
    );
    expect(wrapper.html()).to.equal('<div><input type="number" value="2.15"/></div>');
  });

  describe('onChange', () => {
    it('when called on children transmit it to parent with value multiplied by 100', (done) => {
      const change = (event) => {
        expect(event.target.value).to.equal(215);
        done();
      };
      const wrapper = shallow(
        <ReactAmountField value="215" onChange={(value) => { change(value); }}>
          <input type="number" />
        </ReactAmountField>
      );
      const input = wrapper.find('input');
      input.simulate('change', { target: { value: '2.15' } });
    });

    it('handle null value if onChange', (done) => {
      const change = (event) => {
        expect(event.target.value).to.equal(null);
        done();
      };
      const wrapper = shallow(
        <ReactAmountField value="215" onChange={(value) => { change(value); }}>
          <input type="number" />
        </ReactAmountField>
      );
      const input = wrapper.find('input');
      input.simulate('change', { target: { value: null } });
    });

    it('works with input type="text"', (done) => {
      const change = (event) => {
        expect(event.target.value).to.equal(215);
        done();
      };
      const wrapper = shallow(
        <ReactAmountField value="215" onChange={(value) => { change(value); }}>
          <input type="text" />
        </ReactAmountField>
      );
      const input = wrapper.find('input');
      input.simulate('change', { target: { value: '2.15' } });
    });

    it('refuses more than 2 decimals', (done) => {
      const change = (event) => {
        expect(event.target.value).to.equal(215);
        done();
      };
      const wrapper = shallow(
        <ReactAmountField value="215" onChange={(value) => { change(value); }}>
          <input type="text" />
        </ReactAmountField>
      );
      const input = wrapper.find('input');
      input.simulate('change', { target: { value: '2.1569' } });
    });

    it('escape non digit chars', (done) => {
      const change = (event) => {
        expect(event.target.value).to.equal(215);
        done();
      };
      const wrapper = shallow(
        <ReactAmountField value="215" onChange={(value) => { change(value); }}>
          <input type="text" />
        </ReactAmountField>
      );
      const input = wrapper.find('input');
      input.simulate('change', { target: { value: 'A2.C1P5M' } });
    });

    it('treat , like .', (done) => {
      const change = (event) => {
        expect(event.target.value).to.equal(215);
        done();
      };
      const wrapper = shallow(
        <ReactAmountField value="215" onChange={(value) => { change(value); }}>
          <input type="text" />
        </ReactAmountField>
      );
      const input = wrapper.find('input');
      input.simulate('change', { target: { value: '2,15' } });
    });
  });
});

