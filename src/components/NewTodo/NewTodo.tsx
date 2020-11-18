import React from "react";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";
import Form from "react-bootstrap/Form";
import { ITodo } from "../../interfaces/todo";

interface IProps {
  onHide: () => void;
  addTodo: (todo: ITodo) => void;
}

interface IState {
  title: string;
  checked: boolean;
}

class NewTodo extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = { title: "", checked: false };
  }

  onTodoChange = (e: any) => {
    this.setState({ title: e.target.value });
  };

  onCheckboxChange = () => {
    this.setState({ checked: !this.state.checked });
  };

  onSubmitTodo = (e: any) => {
    e.preventDefault();

    const todo: ITodo = {
      title: this.state.title,
      checked: this.state.checked,
    };

    this.props.addTodo(todo);

    this.setState({ title: "", checked: false });
  };

  render() {
    return (
      <React.Fragment>
        <Form onSubmit={this.onSubmitTodo}>
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
                value={this.state.title}
                onChange={this.onTodoChange}
                aria-label="Text input with checkbox"
              />
            </InputGroup>
          </Form.Group>
          <button>Habit</button>
          <button>Week goal</button>
          <button onClick={this.props.onHide}>Cancel</button>
        </Form>
      </React.Fragment>
    );
  }
}

export default NewTodo;
