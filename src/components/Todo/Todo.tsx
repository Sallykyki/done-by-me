import React from "react";
import Form from "react-bootstrap/Form";

interface IProps {
  title: string;
  idx: number;
  checked: boolean;
  habit: string;
  updateTodo: (idx: number) => void;
}

interface IState {}

class Todo extends React.Component<IProps, IState> {
  onClick = () => {
    this.props.updateTodo(this.props.idx);
  };

  render() {
    return (
      <Form className="component-Todo">
        <Form.Check
          custom
          type="radio"
          id={`todo-${this.props.idx}`}
          label={this.props.title}
          checked={this.props.checked}
          className={this.props.checked ? "component-Todo--checked" : ""}
          onClick={this.onClick}
        />
        {!!this.props.habit && (
          <div className="component-Todo__habit-label">{this.props.habit}</div>
        )}
      </Form>
    );
  }
}

export default Todo;
