import React from "react";
import { func, number, string } from "prop-types";
import { Specification, CardContent, CardStyle, Price, Name } from "./style";

function ProductCard({ name, id, image, price, onClick, specification }) {
  return (
    <CardStyle data-id={id} Img={image} onClick={onClick}>
      <CardContent>
        <Name>{name}</Name>
        <Specification>{specification}</Specification>
        <Price>{`₹ ${price}`}</Price>
      </CardContent>
    </CardStyle>
  );
}

ProductCard.propTypes = {
  specification: string,
  price: number,
  id: number,
  onClick: func,
  name: string,
};

export default ProductCard;
