import React from 'react';
import App from '../App';
import {mount} from 'enzyme';
import { shallow } from 'enzyme';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });

describe('Store test', () => {
  it('shows a list of product categories', () => {
    let component = mount(<App />);
    
    expect(component.find('.main-category')).toBeDefined();
  });
  
  it('shows a list of products', () => {
    let component = mount(<App />);
    
    expect(component.find('.main-product')).toBeDefined();
  });
  
});

