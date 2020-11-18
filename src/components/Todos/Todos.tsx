import React from "react";
import { ITodo } from "../../interfaces/todo";
import Todo from "../Todo";

interface IProps {
  todos: ITodo[];
}

interface IState {}

class Todos extends React.Component<IProps, IState> {
  render() {
    const { todos } = this.props;

    return (
      <div>
        {todos.map((todo, idx) => (
          <Todo key={idx} idx={idx} title={todo.title} />
        ))}
      </div>
    );
  }
}

export default Todos;
