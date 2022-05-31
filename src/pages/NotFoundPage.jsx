import React from "react";
import Grid from "@mui/material/Grid";
import { Link as RouterLink } from "react-router-dom";
import { IconContext } from "react-icons";
import { WiRain } from "react-icons/wi";
import { Typography } from "@mui/material";
import { Link } from "@mui/material";

const NotFoundPage = () => {
  return (
    <Grid container direction="column" justify="center" className="full center-not-found">
      <div className="highlight">
        <Grid item container xs={12} justifyContent={"center"} alignItems={"center"}>
          <Grid item>
            <IconContext.Provider value={{ size: "6em" }}>
              <WiRain />
            </IconContext.Provider>
          </Grid>
          <Grid
            className="title-color"
            item
            container
            direction="column"
            justifyContent={"center"}
            alignItems={"center"}
          >
            <Typography variant="h4" color="inherit">
              404 | Not Found
            </Typography>
            <Link color="inherit" aria-label="menu" component={RouterLink} to="/">
              Back to Home
            </Link>
          </Grid>
        </Grid>
      </div>
    </Grid>
  );
};

export default NotFoundPage;
