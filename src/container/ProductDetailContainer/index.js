import React, { useState } from "react";
import ProductDetailView from "../../view/ProductDetailView/index";
import { useHistory, useLocation } from "react-router-dom";
function ProductDetailContainer() {
  let history = useHistory();
  const location = useLocation();
  let ProductData = location.state.update[0]

  const [count, setCount] = useState(0);
  function handleDecrement() {
    setCount(count - 1);
  }
  function handleIncrement() {
    setCount(count + 1);
  }
  function onBackBtnClick() {
    history.push("/");
    window.location.reload(false);
  }
  const props = {
    count,
    handleDecrement,
    handleIncrement,
    onBackBtnClick,
    ProductData,
  };
  return <ProductDetailView {...props} />;
}

export default ProductDetailContainer;
