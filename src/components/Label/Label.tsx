import React from "react";
import Button from "react-bootstrap/Button";

interface IProps {
  labelType?: string;
}

const Label: React.FunctionComponent<IProps> = ({ labelType }) => {
  return (
    <Button className={`component-label--${labelType ? labelType : ""}`}>
      {labelType === "week" ? "Week goal" : "New habit"}
    </Button>
  );
};

export default Label;
