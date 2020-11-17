import React from "react";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/esm/Button";

interface IProps {
  onHide: () => void;
}

interface IState {
  todo: string;
  checked: boolean;
}

class NewTodo extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = { todo: "", checked: false };
  }

  onTodoChange = (e: any) => {
    this.setState({ todo: e.target.value });
  };

  onCheckboxChange = () => {
    this.setState({ checked: !this.state.checked });
  };

  addNewTodo = (e: any) => {
    e.preventDefault();

    const json = localStorage.getItem("todos");
    const todos = json ? JSON.parse(json) : [];

    todos.push({ todo: this.state.todo, checked: this.state.checked });

    localStorage.setItem("todos", JSON.stringify(todos));

    this.setState({ todo: "", checked: false });
  };

  render() {
    return (
      <Form onSubmit={this.addNewTodo}>
        <Form.Group>
          <InputGroup className="mb-3">
            <InputGroup.Prepend>
              <InputGroup.Checkbox
                checked={this.state.checked}
                onChange={this.onCheckboxChange}
                aria-label="checkbox for todo"
              />
            </InputGroup.Prepend>
            <FormControl
              value={this.state.todo}
              onChange={this.onTodoChange}
              aria-label="Text input with checkbox"
            />
          </InputGroup>
        </Form.Group>
        <button>Habit</button>
        <button>Week goal</button>
        <button onClick={this.props.onHide}>Cancel</button>
      </Form>
    );
  }
}

export default NewTodo;
