import "./App.css";

import ProductHome from "./components/ProductHome/ProductHome";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Product from "./components/Product/Product";
import Footer from "./components/HeaderAndFooter/Footer";
import Header from "./components/HeaderAndFooter/Header";

function App() {
  return (
    <Router>
      <Header/>
      <Switch>
      <Route exact path="/">
          <ProductHome></ProductHome>
        </Route>


    

        <Route path="/products/:id">
          <Product></Product>
        </Route>

      </Switch>
      <Footer/>
    </Router>
  );
}

export default App;
