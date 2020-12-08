import React from "react";

interface IProps {}

interface IState {
  habits: string[];
}

class HabitPage extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = { habits: [] };
  }

  getHabits = () => {
    const json = localStorage.getItem("habits");
    return json ? JSON.parse(json) : [];
  };

  componentDidMount() {
    const habits = this.getHabits();
    this.setState({ habits });
  }

  render() {
    return (
      <div>
        <h1>Build your good habits</h1>
        <li>
          {this.state.habits.map((habit) => (
            <ul>{habit}</ul>
          ))}
        </li>
      </div>
    );
  }
}

export default HabitPage;
