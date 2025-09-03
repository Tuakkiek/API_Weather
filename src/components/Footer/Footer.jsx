import { AppBar, Typography } from "@mui/material";

export function Footer() {
  return (
    <footer>
     <AppBar 
        position="fixed"
      component="footer"
      sx={{
        top: 'auto',
        bottom: 0,
        backgroundColor: "#090909ff",
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
