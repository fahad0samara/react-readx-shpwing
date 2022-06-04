import React, {useContext} from "react";

import WbSunnyIcon from "@mui/icons-material/WbSunny";

import {themeContext} from "./Context";

import NightsStayIcon from "@mui/icons-material/NightsStay";
const Toggle = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  const handleClick = () => {
    theme.dispatch({type: "toggle"});
  };
  return (
    <div className=" flex  justify-center" onClick={handleClick}>
      {darkMode ? (
        <NightsStayIcon size={30}  />
      ) : (
        <WbSunnyIcon size={30}  />
      )}
    </div>
  );
};

export default Toggle;
