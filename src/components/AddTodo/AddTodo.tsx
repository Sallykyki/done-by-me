import React from "react";
import Button from "react-bootstrap/Button";
import { Plus } from "react-bootstrap-icons";

interface IProps {
  onClick: () => void;
}

const AddTodo: React.FunctionComponent<IProps> = (props) => {
  return (
    <Button
      className="component-AddTodo"
      variant="outline-primary"
      onClick={props.onClick}
    >
      <Plus size={32} />
      <span>Add</span>
    </Button>
  );
};

export default AddTodo;
