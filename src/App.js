/* eslint-disable no-unused-expressions */
import { createStore } from "redux";
// import { connect } from "react-redux";
import React from "react";
import "./App.css";

const RECORD_ACTION = "RECORD_ACTION";

const setupStore = [
    {
      type: RECORD_ACTION,
      user: "Xunder",
      text: "Did something"
    }
  ];

const reducer = (state, action) => {
  console.log('Inside the reducer');
  console.log('state', state);
  console.log('action', action)
  console.log('==============');

  if (typeof state === "undefined") {
    return state;
  }

  switch (action.type) {
    case RECORD_ACTION:
      return {
        actions: [
          ...state.actions,
          {
            user: action.user,
            text: action.text
          }
        ]
      };
    default:
      return state;
  }
};

const store = createStore(reducer, setupStore);

const ActionsPresenter = state => {
  const { actions } = state;
  console.log(actions);

  return (
    actions && (
      <ul>
        {actions.map((action, index) => (
          <li key={index}>{`${action.user} DID => ${action.text}`}</li>
        ))}
      </ul>
    )
  );
};

const App = () => (
  <div className="App">
    <header>
      <h1>😎 Redux Actions Spy 😎</h1>
    </header>
    <ActionsPresenter actions={store.getState()} />
  </div>
);

store.subscribe(App);

export default App;
