import { styled, Box } from "@mui/material";
import Button from "@mui/material/Button";

export const ListWrapper = styled(Box)(() => ({
  // height: "100vh",
  width: "100%",
  //   backgroundColor: "gray",
}));

export const CardStyle = styled(Box)(({ Img }) => ({
  boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px",
  borderRadius: "10px",
  cursor: "pointer",
  padding: "20px",
  margin: "30px auto",
  // height: "400px",
  width: "400px",

  "&::before": {
    background: `url(${Img}) no-repeat center center`,
    backgroundSize: "cover",
    borderRadius: "10px",
    margin: "0 auto",
    display: "block",
    content: '""',
    height: "350px",
    width: "350px",
  },
}));
export const CardContent = styled("div")({
  marginTop: "20px",
});

export const Name = styled("div")({
  fontWeight: "bold",
  fontSize: "20px",
});

export const Specifications = styled("div")({
  fontSize: "18px",
  margin: "5px 0",
  color: "gray",
});

export const Price = styled("div")({
  fontSize: "20px",
});
export const ButtonStyle = styled(Button)({
  width: "150px",
  padding: "8px",
});
