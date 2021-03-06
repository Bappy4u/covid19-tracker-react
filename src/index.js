import React from "react";
import * as ReactDOM from "react-dom";

import App from "./App";

const container = document.getElementById("root");

// Create a root.
const root = ReactDOM.createRoot(container);
root.render(<App name="Saeloun blog" />);

// During an update, there is no need to pass the container again
root.render(<App name="Saeloun testimonials" />);
