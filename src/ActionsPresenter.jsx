/* eslint-disable no-unused-expressions */
import React from "react";

class ActionsPresenter extends React.Component {
  render() {
    console.log(`Actions presenter => ${this.props.actions}`);

    return (
      <ul>
        {this.props.actions.map((action, index) => (
          <li key={index}>{`${action.user} DID => ${action.text}`}</li>
        ))}
      </ul>
    );
  }
}

export default ActionsPresenter;
