import * as React from "react";
import { render } from "react-dom";

import App from "./App";

import "./basic.module.scss";

const rootElement = document.getElementById("root");
render(<App />, rootElement);
