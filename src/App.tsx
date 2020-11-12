import React from "react";
import "./styles/app.scss";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import SideNav from "./components/SideNav";

import TodayPage from "./pages/Today";
import WeekPage from "./pages/Week";
import HabitPage from "./pages/Habit";

function App() {
  return (
    <div className="App">
      <h1>DONE BY ME</h1>
      <BrowserRouter>
        <SideNav />
        <Switch>
          <Route exact path="/">
            <TodayPage />
          </Route>
          <Route path="/week">
            <WeekPage />
          </Route>
          <Route path="/habit">
            <HabitPage />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
