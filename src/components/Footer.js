import { Box, Typography } from '@mui/material';

const Footer = () => {
  const footerStyle = {
    backgroundColor: '#B8860B',
    color: '#fff',
    padding: '16px',
    position: 'fixed',
    bottom:0, 
    width:"100%"
  };

  return (
    <Box component="footer" style={footerStyle}>
      <Typography variant="body2" align="center">
        &copy; 2023 My Project Management App
      </Typography>
    </Box>
  );
};

export default Footer;
