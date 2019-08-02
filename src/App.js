/* eslint-disable no-unused-expressions */
import { createStore } from "redux";
import { connect } from "react-redux";
import React from "react";
import "./App.css";

const RECORD_ACTION = "RECORD_ACTION";

const setupStore = {
  actions: [
    {
      user: "Xunder",
      action: "Did something"
    }
  ]
};

const reducer = (initialState, action) => {
  if (typeof state === "undefined") {
    return initialState;
  }

  switch (action) {
    case RECORD_ACTION:
      return {
        actions: [
          ...initialState.actions,
          {
            user: action.user,
            actionText: action.text
          }
        ]
      };
    default:
      return initialState;
  }
};

const store = createStore(reducer, setupStore);

const ActionsPresenter = actions => {
  console.log(actions);

  return (
    actions && (
      <ul>
        {actions.map((action, index) => {
          <li key={index}>{`${action.user} DID => ${action.text}`}</li>;
        })}
      </ul>
    )
  );
};

const App = () => {
  store.subscribe(ActionsPresenter);
  return (
    <div className="App">
      <header className="App-header">
        <h1>😎 Redux Actions Spy 😎</h1>
      </header>
      <ActionsPresenter actions={this.props.actions} />
    </div>
  );
};

const AppContainer = connect(function mapStateToProps(state) {
  return {
    actions: state.actions
  };
})(App);

const Provider = () => (
  <Provider store={store}>
    <AppContainer />
  </Provider>
);

export default Provider;
