import { createStore } from "redux";
import React from "react";
import ReactDOM from "react-dom";

import "./index.css";
import App from "./App";

const RECORD_ACTION = "RECORD_ACTION";

const setupStore = [
  {
    id: 0,
    type: RECORD_ACTION,
    user: "Xunder",
    text: "Did something"
  }
];

const reducer = (state, action) => {
  console.log("Inside the reducer");
  console.log("Coming state", state);
  console.log("action", action);
  console.log("==============");

  if (typeof state === "undefined") {
    return state;
  }

  switch (action.type) {
    case RECORD_ACTION:
      return [
        ...state,
        {
          id: action.id,
          type: action.type,
          user: action.user,
          text: action.text
        }
      ];
    default:
      return state;
  }
};

const store = createStore(reducer, setupStore);

const render = () =>
  ReactDOM.render(<App store={store} />, document.getElementById("root"));

store.subscribe(render);
render();
