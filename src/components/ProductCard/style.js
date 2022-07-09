import { styled, Box } from "@mui/material";

export const CardStyle = styled(Box)(({ Img }) => ({
  boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px",
  borderRadius: "10px",
  cursor: "pointer",
  padding: "20px",
  margin: "0 auto",
  width: "250px",

  "&::before": {
    background: `url(${Img}) no-repeat center center`,
    backgroundSize: "cover",
    borderRadius: "10px",
    margin: "0 auto",
    display: "block",
    content: '""',
    height: "210px",
    width: "210px",
  },
}));
export const CardContent = styled("div")({
  marginTop: "20px",
});

export const Name = styled("div")({
  fontWeight: "bold",
});

export const Specification = styled("div")({
  fontSize: "12px",
  margin: "5px 0",
  color: "gray",
});

export const Price = styled("div")({});
