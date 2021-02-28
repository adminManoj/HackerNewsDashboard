import { BrowserRouter as Router, Route } from "react-router-dom";
import Dashboard from "./dashboard";
import "./App.css";
import StoryDetails from "./storyDetails";
import UserDetails from "./userDetails";

function App() {
  return (
    <div className="App">
      <Router>
        <Route path="/" exact component={Dashboard} />
        <Route path="/storyDetails/:id" component={StoryDetails} />
        <Route path="/userDetails/:id" component={UserDetails} />
      </Router>
    </div>
  );
}

export default App;
