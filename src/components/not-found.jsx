import React from "react";
import { Button } from "antd";

const NotFound = (props) => {
  return (
    <div>
      <h1>Not Found</h1>
      <Button type="primary" onClick={() => props.history.replace("/")}>
        Home
      </Button>
    </div>
  );
};

export default NotFound;
