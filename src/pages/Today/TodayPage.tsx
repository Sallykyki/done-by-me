import React from "react";
import NewTodo from "../../components/NewTodo";
import AddTodo from "../../components/AddTodo";
import Todos from "../../components/Todos";
import { ITodo } from "../../interfaces/todo";
interface IProps {}

interface IState {
  display: boolean;
  todos: ITodo[];
}

class TodayPage extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = { display: false, todos: [] };
  }

  getTodos = () => {
    const json = localStorage.getItem("todos");
    return json ? JSON.parse(json) : [];
  };

  componentDidMount() {
    const todos = this.getTodos();

    this.setState({ todos });
  }

  addTodo = (todo: ITodo) => {
    const { todos } = this.state;

    todos.push(todo);

    localStorage.setItem("todos", JSON.stringify(todos));

    this.setState({ todos: this.getTodos() });
  };

  updateTodo = (idx: number) => {
    const { todos } = this.state;
    const newTodos = [...todos];
    newTodos[idx].checked = !todos[idx].checked;

    localStorage.setItem("todos", JSON.stringify(newTodos));

    this.setState({ todos: this.getTodos() });
  };

  displayNewTodo = () => {
    this.setState({ display: true });
  };

  hideNewTodo = () => {
    this.setState({ display: false });
  };

  render() {
    return (
      <div>
        <h1>Today page</h1>
        <Todos todos={this.state.todos} updateTodo={this.updateTodo} />
        {this.state.display ? (
          <NewTodo onHide={this.hideNewTodo} addTodo={this.addTodo} />
        ) : null}
        <AddTodo onClick={this.displayNewTodo} />
      </div>
    );
  }
}

export default TodayPage;
