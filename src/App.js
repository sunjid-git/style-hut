import "./App.css";
import Header from "./components/Header/Header";
import ProductHome from "./components/ProductHome/ProductHome";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Product from "./components/Product/Product";

function App() {
  return (
    <Router>
      <Header></Header>
      <Switch>
      <Route exact path="/">
          <ProductHome></ProductHome>
        </Route>


    

        <Route path="/products/:id">
          <Product></Product>
        </Route>

      </Switch>
    </Router>
  );
}

export default App;
