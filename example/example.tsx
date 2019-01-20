import React from "react";
import { render } from "react-dom";
import LazyYoutube from "../src";

const App = () => {
    return (
        <div>
            <LazyYoutube id="sBws8MSXN7A" />
        </div>
    );
};

render(<App />, document.getElementById("root"));
