import React from "react";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";
import Form from "react-bootstrap/Form";
import { ITodo } from "../../interfaces/todo";
import Label from "../../components/Label";
interface IProps {
  onHide: () => void;
  addTodo: (todo: ITodo) => void;
}

interface IState {
  title: string;
  checked: boolean;
  habit: string;
  habits: string[];
}

class NewTodo extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = {
      title: "",
      checked: false,
      habits: [],
      habit: "",
    };
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
      habit: this.state.habit,
    };

    this.props.addTodo(todo);

    this.setState({ title: "", checked: false, habit: "" });
  };

  getHabits = () => {
    const json = localStorage.getItem("habits");
    return json ? JSON.parse(json) : [];
  };

  componentDidMount() {
    const habits = this.getHabits();
    this.setState({ habits });
  }

  addNewHabit = (habit: string) => {
    const { habits } = this.state;

    habits.push(habit);

    localStorage.setItem("habits", JSON.stringify(habits));

    this.setState({ habits: this.getHabits() });
  };

  addToHabit = (habit: string) => {
    this.setState({ habit });
  };

  render() {
    console.log(this.state.habit);
    return (
      <React.Fragment>
        <Form className="component-NewTodo" onSubmit={this.onSubmitTodo}>
          <Form.Group>
            <InputGroup className="mb-3 component-NewTodo__input-group">
              <Form.Check
                custom
                type="radio"
                id="new to do"
                checked={this.state.checked}
                onClick={this.onCheckboxChange}
                aria-label="checkbox for todo"
              />
              <FormControl
                autoFocus
                value={this.state.title}
                onChange={this.onTodoChange}
                aria-label="Text input with checkbox"
              />
            </InputGroup>
          </Form.Group>

          {/* <Label labelType="week" /> */}
          <Label
            labelType="habit"
            habits={this.state.habits}
            addNewHabit={this.addNewHabit}
            addToHabit={this.addToHabit}
          />
          <button type="button" onClick={this.props.onHide}>
            Cancel
          </button>
        </Form>
      </React.Fragment>
    );
  }
}

export default NewTodo;
