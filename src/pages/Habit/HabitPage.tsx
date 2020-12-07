import React from "react";

interface IProps {}

interface IState {}

const habits = ["wake up at 6", "practice piano"];

class HabitPage extends React.Component<IProps, IState> {
  render() {
    return (
      <div>
        <h1>Build your good habits</h1>
        <li>
          {habits.map((habit) => (
            <ul>{habit}</ul>
          ))}
        </li>
      </div>
    );
  }
}

export default HabitPage;
