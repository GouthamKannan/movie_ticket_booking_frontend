import { BrowserRouter, Switch, Route } from "react-router-dom";
import Login from "./login";
import Seat from "./seat";
import Movies from "./movies";
import Checkout from "./checkout";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/home" component={Movies}></Route>
        <Route path="/seat" component={Seat}></Route>
        <Route path="/checkout" component={Checkout}></Route>
        <Route path="/" component={Login}></Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
