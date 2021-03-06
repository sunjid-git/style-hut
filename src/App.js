import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Product from "./components/Product/Product";
import Footer from "./components/HeaderAndFooter/Footer";
import Header from "./components/HeaderAndFooter/Header";
import Home from "./components/Home/Home";
import ProductHome from "./components/ProductHome/ProductHome";
import Contact from "./components/Contact/Contact";
import Login from "./components/Contact/Login/Login";

function App() {
  return (
    <Router>
      <Header/>
      <Switch>

      <Route exact path="/">
          <Home></Home>
        </Route>

        <Route path="/home">
          <Home></Home>
        </Route>

        <Route path="/productHome">
          <ProductHome></ProductHome>
        </Route>
        
        <Route path="/products/:id">
          <Product></Product>
        </Route>

        <Route path="/contact">
          <Contact></Contact>
        </Route>

        <Route path="/login">
          <Login></Login>
        </Route>

      </Switch>
      <Footer/>
    </Router>
  );
}

export default App;
