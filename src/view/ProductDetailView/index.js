import React from "react";
import { IMG } from "../../assets/images/index";
import {
  ListWrapper,
  Specifications,
  ButtonStyle,
  CardContent,
  CardStyle,
  Price,
  Name,
} from "./style";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import { ButtonGroup, Button, Stack } from "@mui/material";

function ProductListView({
  count,
  handleDecrement,
  handleIncrement,
  onBackBtnClick,
  ProductData,
}) {
  const { image, name, price, specification } = ProductData;

  return (
    <ListWrapper>
      <CardStyle Img={image}>
        <CardContent>
          <Name>{name}</Name>
          <Specifications>{specification}</Specifications>
          <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="center"
            spacing={2}
            mt={2}
            mb={2}
          >
            <Price>{`₹ ${price}`}</Price>
            <ButtonGroup variant="outlined" aria-label="outlined button group">
              {count > 0 && <Button onClick={handleDecrement}>-</Button>}
              {count > 0 && <Button>{count}</Button>}
              <Button onClick={handleIncrement}>+</Button>
            </ButtonGroup>
          </Stack>
        </CardContent>

        <Stack
          direction="row"
          justifyContent="space-around"
          alignItems="center"
          mt={4}
        >
          <ButtonStyle
            variant="outlined"
            startIcon={<ArrowBackIosIcon />}
            onClick={onBackBtnClick}
          >
            Back
          </ButtonStyle>
          <ButtonStyle variant="contained" startIcon={<AddShoppingCartIcon />}>
            Add to cart
          </ButtonStyle>
        </Stack>
      </CardStyle>
    </ListWrapper>
  );
}

export default ProductListView;
