import React, { useState } from 'react';
import { 
  AppBar, 
  Toolbar, 
  IconButton, 
  Box, 
  InputBase, 
  Button,
  useMediaQuery,
  Menu,
  MenuItem,
  useTheme
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import NotificationsIcon from '@mui/icons-material/Notifications';
import PowerSettingsNewIcon from '@mui/icons-material/PowerSettingsNew';
import Profilephoto from '../assets/Profilephoto.jpg';
import { useNavigate } from 'react-router-dom';

const drawerWidth = 240;

const Navbar = () => {
  const navigate = useNavigate();
  const theme = useTheme();
  const [mobileMenuAnchor, setMobileMenuAnchor] = useState(null);
  const [searchMobileOpen, setSearchMobileOpen] = useState(false);
  
  const isXsScreen = useMediaQuery(theme.breakpoints.down('sm'));
  const isSmScreen = useMediaQuery(theme.breakpoints.down('md'));
  const isMdScreen = useMediaQuery(theme.breakpoints.down('lg'));

  const handleLogout = () => {
    logout(); // Make sure this function is defined
    navigate('/login');
  };

  const handleProfileClick = () => {
    navigate('/profile');
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMenuAnchor(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMenuAnchor(null);
  };

  const handleSearchToggle = () => {
    setSearchMobileOpen(!searchMobileOpen);
  };

  // Calculate dynamic width based on screen size
  const getAppBarWidth = () => {
    if (isXsScreen) {
      return '100%';
    }
    return `calc(100% - ${drawerWidth}px)`;
  };

  const getAppBarLeft = () => {
    if (isXsScreen) {
      return 0;
    }
    return `${drawerWidth}px`;
  };

  return (
    <AppBar
      position="fixed"
      sx={{
        width: getAppBarWidth(),
        height: { xs: '70px', sm: '80px', md: '87px' },
        top: 0,
        left: getAppBarLeft(),
        backgroundColor: '#00999E',
        padding: { xs: '0 8px', sm: '0 12px', md: '0 16px' },
        boxShadow: 'none',
        borderBottom: '1px solid #e0e0e0',
        display: 'flex',
        justifyContent: 'center',
        zIndex: (theme) => theme.zIndex.drawer - 1, // Lower than drawer to prevent overlap
      }}
    >
      <Toolbar sx={{ 
        display: 'flex', 
        justifyContent: 'space-between', 
        alignItems: 'center', 
        padding: 0,
        minHeight: { xs: '70px', sm: '80px', md: '87px' }, 
        width: '100%',
        ml: isXsScreen ? '48px' : 0, // Add margin when menu icon is present
      }}>
        {/* Search Bar - Hidden on very small screens unless search is toggled */}
        {(!isXsScreen || (isXsScreen && searchMobileOpen)) && (
          <Box
            sx={{
              width: { xs: '100%', sm: '200px', md: '300px', lg: '343px' },
              height: '24px',
              border: '1px solid #ccc',
              borderRadius: '4px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              padding: '10px 16px',
              backgroundColor: '#fff',
              position: { xs: searchMobileOpen ? 'absolute' : 'relative', sm: 'relative' },
              top: { xs: searchMobileOpen ? '70px' : 'auto', sm: 'auto' },
              left: { xs: searchMobileOpen ? '0' : 'auto', sm: 'auto' },
              zIndex: { xs: searchMobileOpen ? 1000 : 1, sm: 1 },
              marginRight: { xs: 1, sm: 0 }
            }}
          >
            <InputBase
              placeholder="Search"
              sx={{
                flex: 1,
                fontFamily: 'Poppins',
                fontWeight: 400,
                fontSize: { xs: '14px', sm: '16px' },
                color: '#000000',
                '&::placeholder': {
                  color: '#000000',
                  opacity: 1,
                },
              }}
              disableUnderline
            />
            <IconButton sx={{ padding: 0 }}>
              <SearchIcon sx={{ color: '#000000' }} />
            </IconButton>
          </Box>
        )}

        {/* Search toggle for mobile */}
        {isXsScreen && !searchMobileOpen && (
          <IconButton 
            onClick={handleSearchToggle}
            sx={{ color: '#fff' }}
          >
            <SearchIcon />
          </IconButton>
        )}

        {/* Right section with profile and buttons */}
        <Box sx={{ 
          display: 'flex', 
          gap: { xs: '4px', sm: '8px', md: '12px' },
          mr:"18px"
        }}>
          {/* Notifications Button */}
          {!isXsScreen && (
            <IconButton
              sx={{
                width: { xs: '40px', sm: '48px', md: '56px' },
                height: { xs: '40px', sm: '48px', md: '56px' },
                borderRadius: '40px',
                padding: { xs: '8px', sm: '10px', md: '12px' },
                backgroundColor: '#fff',
              }}
            >
              <NotificationsIcon sx={{ color: '#000000', height: { xs: '24px', sm: '28px', md: '30px' }, width: { xs: '24px', sm: '28px', md: '30px' } }} />
            </IconButton>
          )}

          {/* Profile Button */}
          {!isSmScreen ? (
            <Button
              variant="contained"
              sx={{
                width: { sm: '180px', md: '224px' },
                height: { xs: '40px', sm: '48px', md: '56px' },
                padding: { sm: '4px 4px 4px 16px', md: '4px 4px 4px 24px' },
                borderRadius: '210px',
                backgroundColor: '#fff',
                color: '#00999E',
                display: 'flex',
                justifyContent: 'space-between',
                textTransform: 'none',
                fontWeight: 500,
                fontFamily: 'Poppins',
                fontSize: { sm: '18px', md: '24px' },
                '&:hover': {
                  backgroundColor: '#f0f0f0',
                },
              }}
            >
              Hey,Riya
              <Box 
                sx={{ 
                  width: { sm: '40px', md: '50px' }, 
                  height: { sm: '40px', md: '50px' }, 
                  borderRadius: '50%' 
                }} 
                onClick={handleProfileClick}
              >
                <img 
                  src={Profilephoto} 
                  alt="ProfilePic" 
                  style={{ 
                    width: '100%', 
                    height: '100%', 
                    borderRadius: '50%' 
                  }} 
                />
              </Box>
            </Button>
          ) : (
            <IconButton
              onClick={handleProfileClick}
              sx={{
                width: { xs: '40px', sm: '48px' },
                height: { xs: '40px', sm: '48px' },
                padding: 0
              }}
            >
              <Box 
                sx={{ 
                  width: '100%', 
                  height: '100%', 
                  borderRadius: '50%' 
                }}
              >
                <img 
                  src={Profilephoto} 
                  alt="ProfilePic" 
                  style={{ 
                    width: '100%', 
                    height: '100%', 
                    borderRadius: '50%' 
                  }} 
                />
              </Box>
            </IconButton>
          )}

          {/* Logout Button */}
          {!isXsScreen && (
            <Button
              variant="contained"
              sx={{
                width: { xs: '40px', sm: '48px', md: '56px' },
                height: { xs: '40px', sm: '48px', md: '56px' },
                padding: { xs: '8px', sm: '10px', md: '12px' },
                borderRadius: '40px',
                backgroundColor: '#fff',
                color: '#00999E',
              }}
              onClick={handleLogout}
            >
              <PowerSettingsNewIcon sx={{ color: '#000000', height: { xs: '24px', sm: '28px', md: '30px' }, width: { xs: '24px', sm: '28px', md: '30px' } }} />
            </Button>
          )}

          {/* Mobile menu button for very small screens */}
          {isXsScreen && (
            <IconButton
              edge="end"
              color="inherit"
              aria-label="more options"
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
            >
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                ⋮
              </Box>
            </IconButton>
          )}
        </Box>

        {/* Mobile menu */}
        <Menu
          anchorEl={mobileMenuAnchor}
          open={Boolean(mobileMenuAnchor)}
          onClose={handleMobileMenuClose}
          transformOrigin={{ horizontal: 'right', vertical: 'top' }}
          anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
        >
          <MenuItem onClick={() => {
            handleMobileMenuClose();
            navigate('/notifications');
          }}>
            <NotificationsIcon sx={{ mr: 1 }} />
            Notifications
          </MenuItem>
          {isXsScreen && (
            <MenuItem onClick={handleProfileClick}>
              <Box sx={{ mr: 1, display: 'flex', alignItems: 'center' }}>
                <img 
                  src={Profilephoto} 
                  alt="Profile" 
                  style={{ 
                    width: '24px', 
                    height: '24px', 
                    borderRadius: '50%' 
                  }} 
                />
              </Box>
              Profile
            </MenuItem>
          )}
          <MenuItem onClick={handleLogout}>
            <PowerSettingsNewIcon sx={{ mr: 1 }} />
            Logout
          </MenuItem>
        </Menu>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;