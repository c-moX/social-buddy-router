import './App.css';
import About from './Components/About/About';
import Home from './Components/Home/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import PostDetail from './Components/PostDetail/PostDetail';

function App() {
  return (
    <>
      <h1>App.js</h1>
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/home">Home2</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
            </ul>
          </nav>
          {/* For the switch navigation of react router */}
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/home">
              <Home />
            </Route>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/post/:postId">
              <PostDetail />
            </Route>
            <Route path="*">
              {/* <NoMatch /> */}
            </Route>
          </Switch>
        </div>
      </Router>
    </>
  );
}

export default App;
