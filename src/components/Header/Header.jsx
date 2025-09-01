import React from "react";
import { AppBar, Toolbar, Typography } from "@mui/material";
export function Header() {
  const [isScrolled, setIsScrolled] = React.useState(false);

  React.useEffect(() => {
    function handleScroll() {
      setIsScrolled(window.scrollY > 50);
    }
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <AppBar
        postion="fixed"
        sx={{
          transition: "0.3s",
          backgroundColor: isScrolled ? "rgba(0,0,0,0.9)" : "transparent",
          boxShadow: isScrolled ? 1 : "none",
          color: "#fdfd96",
        }}
      >
        <Toolbar
          sx={{
            justifyContent: "space-between",
            mx: 15,
          }}
        >
          <Typography
            variant="h6"
            sx={{
              fontWeight: "bold",
              flexGrow: 1,
              fontFamily: "Lato",
            }}
          >
            WEATHER APP
          </Typography>
        </Toolbar>
      </AppBar>
    </>
  );
}
