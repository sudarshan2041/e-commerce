import { styled, Box } from "@mui/material";

export const Wrapper = styled(Box)(() => ({
  gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
  display: "grid",
  gridGap: "3rem",
  margin: "0 auto",
  width: "80%",
}));
