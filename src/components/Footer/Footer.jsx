import { AppBar, Typography } from "@mui/material";

export function Footer() {
  return (
    <footer>
     <AppBar 
     position="static"
      component="footer"
        sx={{
          backgroundColor: "rgba(0,0,0,0.9)",
          height: "60px",
          color: "#fdfd96",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
     >
        <Typography variant="body2" sx={{ color: "#fdfd96" }}>
        © 2025 Weather App. All rights reserved.
      </Typography>
     </AppBar>
    </footer>
  );
}
