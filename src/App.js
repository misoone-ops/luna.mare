
import React from 'react';
import Slider from 'react-slick';
import { AppBar, Toolbar, Typography, IconButton, Box } from '@mui/material';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import EventIcon from '@mui/icons-material/Event';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function App() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };

  return (
    <Box sx={{ height: '100vh', backgroundColor: '#1E3A8A', color: 'white', position: 'relative' }}>
      {/* Header */}
      <AppBar position="static" sx={{ backgroundColor: 'transparent', boxShadow: 'none' }}>
        <Toolbar>
          <IconButton>
            <LocationOnIcon sx={{ color: 'white', height:35,width:35 }} />
          </IconButton> 
          <Typography variant="h6" sx={{ flexGrow: 1, textAlign: 'center' }}>
            sole.luna.mare
          </Typography>
          <IconButton>
            <EventIcon sx={{ color: 'white' }} />
          </IconButton>
        </Toolbar>
      </AppBar>
      
      {/* Carousel */}
      <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: 'calc(100vh - 64px)', overflow: 'hidden' }}>
        <Slider {...settings}>
          {Array.from({ length: 6 }).map((_, index) => (
            <Box key={index} component="img"
              src="/path-to-your-image.jpg" // replace with actual image source
              alt="Beach"
              sx={{
                width: '100%',
                height: '100%',
                objectFit: 'cover'
              }}
            />
          ))}
        </Slider>
      </Box>

      {/* Footer or branding */}
      <Box sx={{ position: 'absolute', bottom: 0, left: 0, right: 0, textAlign: 'center', padding: '16px', backgroundColor: '#1E3A8A' }}>
        <Typography variant="caption">© Your Brand | All Rights Reserved</Typography>
      </Box>
    </Box>
  );
}

export default App;

