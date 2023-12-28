import { AppBar, Box, Divider, Toolbar } from '@mui/material';

const Header = () => {
  return (
    <Box>
      <AppBar position="static">
        <Toolbar
          variant="dense"
          disableGutters
          sx={{
            padding: '12px',
            alignItems: 'center',
          }}
        >
          <Divider sx={{ flexGrow: 1, borderColor: 'transparent' }} />
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Header;
