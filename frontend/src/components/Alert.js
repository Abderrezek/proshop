import React from "react";
import { Message } from "semantic-ui-react";

const Alert = () => {
  return (
    <Message negative>
      <Message.Header>We're sorry we can't apply that discount</Message.Header>
      <p>That offer has expired</p>
    </Message>
  );
};

export default Alert;
