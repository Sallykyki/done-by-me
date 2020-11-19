import React from "react";
import Form from "react-bootstrap/Form";

interface IProps {
  title: string;
  idx: number;
}

interface IState {}

class Todo extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
  }
  render() {
    return (
      <Form className="component-Todo">
        <Form.Check
          custom
          type="radio"
          id={`todo-${this.props.idx}`}
          label={this.props.title}
        />
      </Form>
    );
  }
}

export default Todo;
