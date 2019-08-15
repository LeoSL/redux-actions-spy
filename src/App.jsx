/* eslint-disable no-unused-expressions */
import React from "react";

import ActionsPresenter from "./ActionsPresenter";
import "./App.css";

let nextActionId = 1;

const addAction = text => {
  return {
    id: nextActionId++,
    type: "RECORD_ACTION",
    user: "LeoSL",
    text
  };
};

const App = reduxStore => {
  const { store } = reduxStore;
  console.log("App =>", store.getState());

  return (
    <div className="App">
      <header>
        <h1>😎 Redux Actions Spy 😎</h1>
      </header>
      <ActionsPresenter actions={store.getState()} />
      <button onClick={() => store.dispatch(addAction("Clicked Button"))}>
        Button
      </button>
    </div>
  );
};

export default App;
