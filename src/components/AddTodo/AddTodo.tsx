import React from "react";
import Button from "react-bootstrap/Button";

interface IProps {
  onClick: () => void;
}

const AddTodo: React.FunctionComponent<IProps> = (props) => {
  return <Button onClick={props.onClick}>Add todo</Button>;
};

export default AddTodo;
