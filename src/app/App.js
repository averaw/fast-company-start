import React from "react";
import NavBar from "./components/navBar";
import Users from "./components/users";
import { Route, Switch } from "react-router-dom";
import Login from "./components/login";
import Main from "./components/main";

function App() {
    return (
        <div>
            <NavBar />,
            <Switch>
                <Route path="/login" component={Login} />
                <Route path="/main" component={Main} />
                <Route path="/users/:userId?" exact component={Users} />
            </Switch>
        </div>
    );
}

export default App;
