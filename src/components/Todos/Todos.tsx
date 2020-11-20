import React from "react";
import { ITodo } from "../../interfaces/todo";
import Todo from "../Todo";

interface IProps {
  todos: ITodo[];
  updateTodo: (idx: number) => void;
}

interface IState {}

class Todos extends React.Component<IProps, IState> {
  render() {
    const { todos, updateTodo } = this.props;

    return (
      <div>
        {todos.map((todo, idx) => (
          <Todo
            key={idx}
            idx={idx}
            title={todo.title}
            checked={todo.checked}
            updateTodo={updateTodo}
          />
        ))}
      </div>
    );
  }
}

export default Todos;
