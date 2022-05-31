import React, { useRef, useEffect, useState } from "react";
import PropTypes from "prop-types";
import Clouds from "vanta/dist/vanta.clouds.min";
import * as THREE from "three";
// import { Typography } from "@mui/material";

const WelcomeScreen = ({ children }) => {
  const myRefDiv = useRef(null);
  const [vanta, setVanta] = useState(0);

  useEffect(() => {
    if (!vanta) {
      setVanta(
        Clouds({
          THREE,
          el: myRefDiv.current,
        })
      );
      console.log("setVanta en 1");
    }
    //Al salir de la pantalla, detengo el efecto
    return () => {
      if (vanta) {
        vanta.destroy();
      }
    };
  }, [vanta]);

  return (
    <div className="full" ref={myRefDiv}>
      {children}
    </div>
  );
};

WelcomeScreen.propTypes = {
  children: PropTypes.node,
};

export default WelcomeScreen;
