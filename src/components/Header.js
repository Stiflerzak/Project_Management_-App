import { AppBar, Toolbar, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';

const Header = () => {
  const StyledAppBar = styled(AppBar)({
    backgroundColor: '#333',
    color: '#fff',
  });

  return (
    <StyledAppBar position="static">
      <Toolbar>
        <Typography variant="h6" component="div">
          My Project Management App
        </Typography>
      </Toolbar>
    </StyledAppBar>
  );
};

export default Header;