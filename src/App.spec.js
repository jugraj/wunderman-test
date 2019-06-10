import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import App from './App';

let wrapper;

describe('main', () => {
	beforeEach(() => {
		wrapper = shallow(<App />);
	});

	it('should find container', () => {
		expect(wrapper.find('.container').exists()).toBe(true);
	});
	it('should find loading text', () => {
		expect(wrapper.find('.container__loading').exists()).toBe(true);
		expect(wrapper.find('.container__loading').text()).toBe('Loading...');
	});
});
