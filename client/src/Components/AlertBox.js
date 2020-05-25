import React from "react";

class AlertBox extends React.Component {
  render() {
    return (
      <div className="alert alert-success" role="alert">
        <h4 className="alert-heading">Well done!</h4>
        You successfully read this important alert message.
      </div>
    );
  }
}

export default AlertBox;
