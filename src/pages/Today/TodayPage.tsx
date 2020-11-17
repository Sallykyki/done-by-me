import React from "react";
import NewTodo from "../../components/NewTodo";
import AddTodo from "../../components/AddTodo";
import { flattenDiagnosticMessageText } from "typescript";

interface IProps {}

interface IState {
  display: boolean;
}

class TodayPage extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = { display: false };
  }

  displayNewTodo = () => {
    this.setState({ display: true });
  };

  hideNewTodo = () => {
    this.setState({ display: false });
  };

  render() {
    return (
      <div>
        Today page
        {this.state.display ? <NewTodo onHide={this.hideNewTodo} /> : null}
        <AddTodo onClick={this.displayNewTodo} />
      </div>
    );
  }
}

export default TodayPage;
