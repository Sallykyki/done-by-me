import React from "react";
import Dropdown from "react-bootstrap/Dropdown";
import Form from "react-bootstrap/Form";

interface IProps {
  labelType: string;
  habits: string[];
  addNewHabit?: (habit: string) => void;
  addToHabit: (habit: string) => void;
}

interface IState {
  label: string;
  newHabit: string;
}

class Label extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = {
      label: props.labelType === "week" ? "Week goal" : "Build habit",
      newHabit: "",
    };
  }

  handleClick = (habit: string) => () => {
    this.setState({ label: habit });
    this.props.addToHabit(habit);
  };

  handleNewHabitChange = (e: any) => {
    this.setState({ newHabit: e.target.value });
  };

  onSubmitNewHabit = (e: any) => {
    if (e.key === "Enter") {
      e.preventDefault();
      this.props.addNewHabit!(this.state.newHabit);
      this.setState({ newHabit: "" });
    }
  };

  render() {
    const { labelType, habits } = this.props;
    return (
      <Dropdown>
        <Dropdown.Toggle
          className={`component-label--${labelType ? labelType : ""}`}
        >
          {this.state.label}
        </Dropdown.Toggle>
        {labelType === "habit" && (
          <Dropdown.Menu>
            {habits!.map((habit, idx) => (
              <Dropdown.Item key={idx} onClick={this.handleClick(habit)}>
                {habit}
              </Dropdown.Item>
            ))}
            <Form>
              <Form.Control
                value={this.state.newHabit}
                placeholder="Enter a new habit"
                onKeyPress={this.onSubmitNewHabit}
                onChange={this.handleNewHabitChange}
              />
            </Form>
          </Dropdown.Menu>
        )}
      </Dropdown>
    );
  }
}

export default Label;
