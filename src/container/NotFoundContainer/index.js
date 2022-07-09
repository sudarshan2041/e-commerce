import React from "react";
import { Wrapper } from "./style";
import { useHistory } from "react-router-dom";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import { Button } from "@mui/material";

function NotFoundContainer() {
  let history = useHistory();

  function handleGoBack() {
    history.push("/");
    window.location.reload(false);
  }
  return (
    <Wrapper>
      Oops! Page Not Found
      <div>
        <Button
          onClick={handleGoBack}
          variant="contained"
          startIcon={<ArrowBackIosIcon />}
        >
          Go Back
        </Button>
      </div>
    </Wrapper>
  );
}

export default NotFoundContainer;
