import React from "react";
import ReactDOM from "react-dom";
import { shallow } from "enzyme";
import { expect } from "chai";
import App from "../App.js";
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-14';

configure({ adapter: new Adapter() });

describe('Unit Test: <App />', () => {
    it('should render App component', () => {
        const wrapper = shallow(<App />);
        expect(wrapper.find(".container")).to.have.lengthOf(1);
    });
});
