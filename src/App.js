import React from 'react';
import Slider from 'react-slick';
import { AppBar, Toolbar, Typography, IconButton, Box } from '@mui/material';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import EventIcon from '@mui/icons-material/Event';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './App.css';


function App() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };

  const imagesLuna = [
    '/casaluna/luna1.jpeg',
    '/casaluna/luna2.jpeg',
    '/casaluna/luna3.jpeg',
    '/casaluna/luna4.jpg',
    '/casaluna/luna5.jpeg',
    '/casaluna/luna6.jpeg',
    '/casaluna/luna7.jpeg',
  ];

  const imagesMare = [
    '/casamare/mare1.jpeg',
    '/casamare/mare2.jpeg',
    '/casamare/mare3.jpg',
    '/casamare/mare4.jpg',
    '/casamare/mare5.jpg',
    '/casamare/mare6.jpg',
    '/casamare/mare7.jpg',
  ];

  return (
    <Box sx={{ backgroundColor: '#1E3A8A', color: 'white', position: 'relative', minHeight: '100vh' }}>
      {/* Header */}
      <AppBar position="static" sx={{ backgroundColor: 'transparent', boxShadow: 'none' }}>
        <Toolbar>
          <IconButton>
            <LocationOnIcon sx={{ color: 'white', height: 35, width: 35 }} />
          </IconButton>
          <Typography variant="h6" sx={{ flexGrow: 1, textAlign: 'center' }}>
            sole.luna.mare
          </Typography>
          <IconButton>
            <EventIcon sx={{ color: 'white' }} />
          </IconButton>
        </Toolbar>
      </AppBar>

      <Box sx={{ marginTop: '16px', marginBottom: '50px' }}>
        <Typography variant="h5" sx={{ textAlign: 'center', marginBottom: '8px' }}>Luna Collection</Typography>
        <Slider {...settings}>
          {imagesLuna.map((image, index) => (
            <Box key={index} sx={{ position: 'relative' }}>
              <Box component="img"
                src={image}
                alt={`Luna Slide ${index + 1}`}
                className="carousel-image"
                sx={{ width: '95%', borderRadius: '8px' }}
              />
            </Box>
          ))}
        </Slider>
        {/* Check Availability Link */}
        <Box 
          sx={{
            marginTop: '16px',
            textAlign: 'left', // Align to the left
            marginLeft: '16px',
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            padding: '8px 16px',
            borderRadius: '4px',
            width: 'fit-content' // Optional: adjusts the box to fit the text content
          }}
        >
          <a 
            href="#check-availability" // Replace with your actual link
            style={{
              color: '#FFD700',
              textDecoration: 'none',
              fontWeight: 'bold',
            }}
          >
            Check Availability
          </a>
        </Box>
      </Box>

      <Box sx={{ marginTop: '32px', marginBottom: '50px' }}>
        <Typography variant="h5" sx={{ textAlign: 'center', marginBottom: '8px' }}>Mare Collection</Typography>
        <Slider {...settings}>
          {imagesMare.map((image, index) => (
            <Box key={index} sx={{ position: 'relative' }}>
              <Box component="img"
                src={image}
                alt={`Mare Slide ${index + 1}`}
                className="carousel-image"
                sx={{ width: '95%', borderRadius: '8px', margin: '0 80px' }}
              />
            </Box>
          ))}
        </Slider>
        {/* Check Availability Link */}
        <Box 
          sx={{
            marginTop: '16px',
            textAlign: 'left', // Align to the left
            marginLeft: '16px',
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            padding: '8px 16px',
            borderRadius: '4px',
            width: 'fit-content' // Optional: adjusts the box to fit the text content
          }}
        >
          <a 
            href="#check-availability" // Replace with your actual link
            style={{
              color: '#FFD700',
              textDecoration: 'none',
              fontWeight: 'bold',
            }}
          >
            Check Availability
          </a>
        </Box>
      </Box>

      {/* Footer or branding */}
      <Box sx={{bottom: 0, left: 0, right: 0, textAlign: 'center', padding: '16px', backgroundColor: '#1E3A8A' }}>
        <Typography variant="caption">© Your Brand | All Rights Reserved</Typography>
      </Box>
    </Box>
  );
}

export default App;
