import React from "react";
import { Wrapper } from "./style";

import { ProductCard } from "../../components/index";


function ProductListView({ dummyData, handleOnClick }) {
  return (
    <Wrapper>
      {dummyData.map((product) => (
        <ProductCard
          key={product.id}
          id={product.id}
          name={product.name}
          image={product.image}
          price={product.price}
          specification={product.specification}
          onClick={handleOnClick}
        />
      ))}
    </Wrapper>
  );
}

export default ProductListView;
