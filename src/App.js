import TopBar from "./components/topbar/topbar";
import Home from "./pages/home/home";
import Register from "./pages/register/register";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./pages/login/login";
import Write from "./pages/write/write";
import Settings from "./pages/settings/settings";
import Single from "./pages/single/single";

function App() {
  const user = true;
  return (
    <Router>
      <TopBar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/register">{user ? <Home /> : <Register />}</Route>
        <Route path="/login">{user ? <Home /> : <Login />}</Route>
        <Route path="/write">{user ? <Write /> : <Register />}</Route>
        <Route path="/settings">{user ? <Settings /> : <Login />}</Route>
        <Route path="/post/:postId">
          <Single />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
