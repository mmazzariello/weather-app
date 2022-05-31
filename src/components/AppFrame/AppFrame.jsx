import React from "react";
import Grid from "@mui/material/Grid";
import IconButton from "@mui/material/IconButton";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import { Link } from "@mui/material";
import PropTypes from "prop-types";
import { IconContext } from "react-icons";
import { WiDaySunny } from "react-icons/wi";
import { Typography } from "@mui/material";
import { Link as LinkRouter } from "react-router-dom";

const AppFrame = ({ children }) => {
  return (
    <Grid container justifyContent={"center"}>
      <AppBar position="static">
        <Toolbar variant="dense">
          <IconButton color="inherit" aria-label="menu">
            <Link component={LinkRouter} to="/" color="inherit" aria-label="menu">
              <IconContext.Provider value={{ size: "2em" }}>
                <WiDaySunny />
              </IconContext.Provider>
            </Link>
          </IconButton>
          <Typography variant="h6" color="inherit">
            Weather App
          </Typography>
        </Toolbar>
      </AppBar>
      <Grid item xs={12} sm={11} md={10} lg={8}>
        {children}
      </Grid>
    </Grid>
  );
};

AppFrame.propTypes = {
  children: PropTypes.node,
};

export default AppFrame;
