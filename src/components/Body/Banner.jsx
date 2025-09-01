import {Box, Typography,} from "@mui/material";

export function Banner (){

    const imgBg = [
    "url('img/img-bg-1.jpg')",
    "url('img/img-bg-2.jpg')",
    "url('img/img-bg-3.jpg')",
    "url('img/img-bg-4.jpg')",
    "url('img/img-bg-5.jpg')",
    ]
    const random = Math.floor(Math.random() * imgBg.length);
    return(
        <Box
         sx={{
        position: "relative",
        width: "100%",
        height: "450px",
        backgroundImage: imgBg[random],
        backgroundSize: "cover",
        backgroundPosition: "center",
        display: "flex",
        flexDirection: "column", 
        alignItems: "center", 
        justifyContent: "center", 
        gap: 5,
      }}
        >  
        <Typography variant="h4" sx={{ color: "#fff", textAlign: "center" }}>
        Welcome to the Weather App
      </Typography> 
         </Box>
    );
}