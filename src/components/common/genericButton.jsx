import React from "react";
import { Button } from "antd";

const GenericButton = ({ label, onClick }) => {
  return (
    <Button className="align-left m-b15" onClick={onClick}>
      {label}
    </Button>
  );
};

export default GenericButton;
