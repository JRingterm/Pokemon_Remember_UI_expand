import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Defence from "./routers/Defence";
import Typecal from "./routers/Typecal";

import Home from "./routers/Home";


function App() {
  return (
    <Router>
      <Switch>
        <Route path="/Typecal/:id">
          <Typecal />
        </Route>
        <Route path="/Typecal">
          <Typecal />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
