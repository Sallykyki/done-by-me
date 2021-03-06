import React from "react";
import { getHabits } from "../../data/fetchData";

interface IProps {}

interface IState {
  habits: string[];
}

class HabitPage extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = { habits: [] };
  }

  componentDidMount() {
    const habits = getHabits();
    this.setState({ habits });
  }

  render() {
    return (
      <div className="component-HabitPage">
        <h1>Build your good habits</h1>
        {this.state.habits.length > 0 && (
          <ul>
            {this.state.habits.map((habit) => (
              <li key={habit}>{habit}</li>
            ))}
          </ul>
        )}
      </div>
    );
  }
}

export default HabitPage;
