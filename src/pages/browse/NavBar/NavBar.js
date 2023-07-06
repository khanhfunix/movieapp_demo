import { useState, useEffect } from "react";
import NavHomePage from "./NavHomePage";
import SearchComponent from "./SearchComponent";
import classes from "./NavBar.module.css";

const NavBar = (props) => {
  const [backgroundNav, setBackgroundNav] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY >= 200) {
        setBackgroundNav(true);
      } else {
        setBackgroundNav(false);
      }
    });
  }, []);
  return (
    <div
      className={classes.NavBar}
      style={backgroundNav ? {} : { background: "transparent" }}
    >
      <NavHomePage />
      <SearchComponent />
    </div>
  );
};

export default NavBar;
