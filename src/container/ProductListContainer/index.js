import React from "react";
import { useHistory } from "react-router-dom";
import { dummyData } from "../../utils/constants";
import ProductListView from "../../view/ProductListView/index";

function ProductListContainer() {
  let history = useHistory();

  function handleOnClick(e) {
    let data = dummyData.filter(
      (product) => product.id == e.currentTarget.dataset.id
    );

    history.push({
      pathname: "/product-detail",
      state: {
        update: data,
      },
    });
    window.location.reload(false);
  }

  const props = { dummyData, handleOnClick };

  return <ProductListView {...props} />;
}

export default ProductListContainer;
