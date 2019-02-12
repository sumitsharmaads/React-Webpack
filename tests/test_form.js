import chai from 'chai';
import React from 'react';
import {form} from '../src/form';
import {shallow} from 'enzyme';

let expect = chai.expect
describe("<form/>", ()=>{
    "use strict";
    it('renders one <h1> tag', ()=>{
        const wrapper = shallow(<Hello />);
        expect(wrapper.find('h1')).to.have.length(1)
    });
})