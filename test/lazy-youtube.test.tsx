import * as React from "react";
import { expect } from "chai";
import { shallow } from "enzyme";
import LazyYoutube from "../src";

describe("<LazyYoutube />", () => {
    it("renders the the component", () => {
        const wrapper = shallow(<LazyYoutube id="" />);
        expect(wrapper.find(".react-lazy-youtube")).to.have.length(1);
    });
});
