import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import sinon from 'sinon';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import ReactAmountField from '../ReactAmountField';

configure({ adapter: new Adapter() });

function createChange(done, value) {
  return (event) => {
    expect(event.target.value).to.equal(value);
    done();
  };
}

/* eslint-disable no-undef */
describe('ReactAmountField', () => {
  // following lines serve to detect bad proptype or any react warning

  /* eslint-disable no-undef, no-console */
  beforeEach(() => {
    const stub = sinon.stub(console, 'error');
    stub.callsFake((warning) => { throw new Error(warning); });
  });
  /* eslint-disable no-undef */
  afterEach(() => { console.error.restore(); });

  it('accept number value', () => {
    const wrapper = shallow(
      <ReactAmountField className="bar" value={1337}><span /></ReactAmountField>,
    );
    expect(wrapper.html()).to.equal('<div><span class="bar" value="13.37"></span></div>');
  });

  it('accept string value', () => {
    const wrapper = shallow(
      <ReactAmountField className="bar" value={'1337'}><span /></ReactAmountField>,
    );
    expect(wrapper.html()).to.equal('<div><span class="bar" value="13.37"></span></div>');
  });

  it('transmit all properties to children', () => {
    const wrapper = shallow(
      <ReactAmountField className="bar"><span /></ReactAmountField>,
    );
    expect(wrapper.html()).to.equal('<div><span class="bar" value=""></span></div>');
  });

  it('handle value equals to 0 (integer)', () => {
    const wrapper = shallow(
      <ReactAmountField className="bar" value={0}><span /></ReactAmountField>,
    );
    expect(wrapper.html()).to.equal('<div><span class="bar" value="0"></span></div>');
  });

  it('handle value equals to 0 (string)', () => {
    const wrapper = shallow(
      <ReactAmountField className="bar" value="0"><span /></ReactAmountField>,
    );
    expect(wrapper.html()).to.equal('<div><span class="bar" value="0"></span></div>');
  });

  it('divide the value by 100 and transmit it to the child', () => {
    const wrapper = shallow(
      <ReactAmountField value="215"><input type="number" /></ReactAmountField>,
    );
    expect(wrapper.html()).to.equal('<div><input type="number" value="2.15"/></div>');
  });

  const HANDLED_EVENTS = { onBlur: 'blur', onChange: 'change', onDrop: 'drop' };

  Object.keys(HANDLED_EVENTS).forEach((key) => {
    describe(key, () => {
      it('when called on children transmit it to parent with value multiplied by 100', (done) => {
        const props = {
          value: '215',
        };
        props[key] = (value) => {
          createChange(done, '215')(value);
        };
        const wrapper = shallow(
          <ReactAmountField {...props}>
            <input type="number" />
          </ReactAmountField>,
        );
        const input = wrapper.find('input');
        input.simulate(HANDLED_EVENTS[key], { target: { value: '2.15' } });
      });

      it('handle null value', (done) => {
        const props = {
          value: '215',
        };
        props[key] = (value) => {
          createChange(done, null)(value);
        };
        const wrapper = shallow(
          <ReactAmountField {...props}>
            <input type="number" />
          </ReactAmountField>,
        );
        const input = wrapper.find('input');
        input.simulate(HANDLED_EVENTS[key], { target: { value: null } });
      });

      it('works with input type="text"', (done) => {
        const props = {
          value: '215',
        };
        props[key] = (value) => {
          createChange(done, '215')(value);
        };
        const wrapper = shallow(
          <ReactAmountField {...props}>
            <input type="text" />
          </ReactAmountField>,
        );
        const input = wrapper.find('input');
        input.simulate(HANDLED_EVENTS[key], { target: { value: '2.15' } });
      });

      it('refuses more than 2 decimals', (done) => {
        const props = {
          value: '215',
        };
        props[key] = (value) => {
          createChange(done, '215')(value);
        };
        const wrapper = shallow(
          <ReactAmountField {...props}>
            <input type="text" />
          </ReactAmountField>,
        );
        const input = wrapper.find('input');
        input.simulate(HANDLED_EVENTS[key], { target: { value: '2.1569' } });
      });

      it('escape non digit chars', (done) => {
        const props = {
          value: '215',
        };
        props[key] = (value) => {
          createChange(done, '215')(value);
        };
        const wrapper = shallow(
          <ReactAmountField {...props}>
            <input type="text" />
          </ReactAmountField>,
        );
        const input = wrapper.find('input');
        input.simulate(HANDLED_EVENTS[key], { target: { value: 'A2.C1P5M' } });
      });

      it('treat , like .', (done) => {
        const props = {
          value: '215',
        };
        props[key] = (value) => {
          createChange(done, '215')(value);
        };
        const wrapper = shallow(
          <ReactAmountField {...props}>
            <input type="text" />
          </ReactAmountField>,
        );
        const input = wrapper.find('input');
        input.simulate(HANDLED_EVENTS[key], { target: { value: '2,15' } });
      });
    });
  });
});
