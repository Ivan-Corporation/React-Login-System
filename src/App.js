import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Dashboard from "./components/Dashboard/Dashboard";
import Preferences from "./components/Preferences/Preferences";
import Login from "./components/Login/Login";
import useToken from "./useToken";

function App () {
  const { token, setToken } = useToken();

  if (!token) {
    // eslint-disable-next-line react/react-in-jsx-scope
    return <Login setToken={setToken}/>;
  }

  return (
    (
      <div className="wrapper">
        <h1>Application</h1>
        <a href="/dashboard">Dashboard</a>
        <hr></hr>
        <a href="/preferences">Preferences</a>
        <hr></hr>
        <a href="/">main</a>
        <BrowserRouter>
          <Switch>
            <Route path="/dashboard">

              <Dashboard />
            </Route>
            <Route path="/preferences">
              <Preferences />
            </Route>
          </Switch>
        </BrowserRouter>
      </div>
    )
  );
}

export default App;
