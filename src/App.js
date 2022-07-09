import "./App.css";
import ProductListContainer from "./container/ProductListContainer";
import ProductDetailContainer from "./container/ProductDetailContainer";
import NotFoundContainer from "./container/NotFoundContainer";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <div className="bd-main">
      <Router>
        <Switch>
          <Route exact path="/" component={ProductListContainer} />
          <Route
            exact
            path="/product-detail"
            component={ProductDetailContainer}
          />
          <Route component={NotFoundContainer} />
        </Switch>
      </Router>

      {/* <ProductListContainer />
      <ProductDetailContainer /> */}
    </div>
  );
}

export default App;
